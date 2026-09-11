from __future__ import annotations

import base64
import hashlib
import json
from urllib.parse import urlencode

from bulletjournal_controller.config import canonical_public_origin
from bulletjournal_controller.domain.errors import (
    AuthenticationError,
    AuthorizationError,
    ValidationError,
)
from bulletjournal_controller.utils import (
    iso_after,
    random_token,
    sha256_text,
    utc_now_iso,
)

ACCESS_TOKEN_LIFETIME_SECONDS = 900
REFRESH_TOKEN_LIFETIME_SECONDS = 30 * 24 * 60 * 60
AUTHORIZATION_CODE_LIFETIME_SECONDS = 300
VALID_SCOPES = {'mcp:read', 'mcp:write', 'mcp:run'}


class OAuthService:
    def __init__(self, *, oauth, users, authorization_service, server_config) -> None:
        self.oauth = oauth
        self.users = users
        self.authorization_service = authorization_service
        self.server_config = server_config

    @property
    def issuer(self) -> str:
        return canonical_public_origin(
            self.server_config.public_origin,
            allow_http=not self.server_config.cookie_secure,
        )

    def resource_url(self, project_id: str) -> str:
        return f'{self.issuer}/p/{project_id}/mcp'

    def register_client(self, payload: dict[str, object]) -> dict[str, object]:
        redirect_uris = payload.get('redirect_uris')
        if (
            not isinstance(redirect_uris, list)
            or not redirect_uris
            or not all(isinstance(uri, str) and uri for uri in redirect_uris)
        ):
            raise ValidationError('redirect_uris must be a non-empty list of exact URIs.')
        client_id = f'client-{random_token(bytes_length=18)}'
        self.oauth.create_client(
            client_id=client_id,
            client_secret_hash=None,
            redirect_uris_json=json.dumps(redirect_uris),
            client_name=str(payload.get('client_name') or 'MCP client'),
        )
        return {
            'client_id': client_id,
            'redirect_uris': redirect_uris,
            'token_endpoint_auth_method': 'none',
        }

    def validate_authorization_request(
        self,
        *,
        client_id: str,
        redirect_uri: str,
        resource: str,
        project_id: str,
        scope: str,
        code_challenge: str,
        code_challenge_method: str,
    ) -> tuple[object, list[str]]:
        client = self.oauth.get_client(client_id)
        if client is None or redirect_uri not in json.loads(client['redirect_uris_json']):
            raise ValidationError('Invalid client or redirect_uri.')
        if resource != self.resource_url(project_id):
            raise ValidationError('resource must match the project MCP URL.')
        if code_challenge_method != 'S256' or not code_challenge:
            raise ValidationError('PKCE S256 is required.')
        scopes = self._parse_scopes(scope)
        return client, scopes

    def authorize(
        self,
        *,
        user,
        client_id: str,
        redirect_uri: str,
        resource: str,
        project_id: str,
        scopes: list[str],
        code_challenge: str,
        state: str | None,
    ) -> str:
        self._require_scopes(user, project_id, scopes)
        code = random_token(bytes_length=32)
        self.oauth.create_code(
            code_hash=sha256_text(code),
            user_id=user.user_id,
            client_id=client_id,
            project_id=project_id,
            resource=resource,
            redirect_uri=redirect_uri,
            scopes=' '.join(scopes),
            code_challenge=code_challenge,
            expires_at=iso_after(seconds=AUTHORIZATION_CODE_LIFETIME_SECONDS),
        )
        query = {'code': code}
        if state is not None:
            query['state'] = state
        return f'{redirect_uri}{"&" if "?" in redirect_uri else "?"}{urlencode(query)}'

    def exchange_code(
        self,
        *,
        code: str,
        client_id: str,
        redirect_uri: str,
        resource: str | None,
        code_verifier: str,
    ) -> dict[str, object]:
        row = self.oauth.consume_code(sha256_text(code))
        if (
            row is None
            or row['expires_at'] <= utc_now_iso()
            or row['client_id'] != client_id
            or row['redirect_uri'] != redirect_uri
            or (resource is not None and row['resource'] != resource)
        ):
            raise AuthenticationError('Invalid authorization code.')
        challenge = base64.urlsafe_b64encode(hashlib.sha256(code_verifier.encode()).digest()).rstrip(b'=').decode()
        if challenge != row['code_challenge']:
            raise AuthenticationError('Invalid PKCE verifier.')
        return self._issue_tokens(dict(row))

    def refresh(self, refresh_token: str, *, client_id: str, resource: str | None) -> dict[str, object]:
        row = self.oauth.consume_refresh_token(sha256_text(refresh_token))
        if (
            row is None
            or row['replaced_at'] is not None
            or row['revoked_at'] is not None
            or row['expires_at'] <= utc_now_iso()
            or row['client_id'] != client_id
            or (resource is not None and row['resource'] != resource)
        ):
            raise AuthenticationError('Invalid refresh token.')
        user = self.users.get(row['user_id'])
        if user is None:
            raise AuthenticationError('Token subject no longer exists.')
        self._require_scopes(user, row['project_id'], row['scopes'].split())
        return self._issue_tokens(dict(row), family_id=row['family_id'])

    def authenticate(self, authorization: str | None, *, project_id: str):
        if not authorization or not authorization.startswith('Bearer '):
            raise AuthenticationError('Bearer access token required.')
        token = self.oauth.get_access_token(sha256_text(authorization[7:]))
        if (
            token is None
            or token.revoked_at is not None
            or token.expires_at <= utc_now_iso()
            or token.project_id != project_id
            or token.resource != self.resource_url(project_id)
        ):
            raise AuthenticationError('Invalid or expired access token.')
        user = self.users.get(token.user_id)
        if user is None or not user.is_active:
            raise AuthenticationError('Invalid token subject.')
        self.authorization_service.require_project_viewer(user, project_id)
        return user, token

    def revoke(self, token: str) -> None:
        token_hash = sha256_text(token)
        self.oauth.revoke_access_token(token_hash)
        self.oauth.revoke_refresh_token(token_hash)

    def _issue_tokens(self, row: dict[str, object], *, family_id: str | None = None) -> dict[str, object]:
        access_token, refresh_token = (
            random_token(bytes_length=32),
            random_token(bytes_length=32),
        )
        now = utc_now_iso()
        self.oauth.create_access_token(
            token_id=f'token-{random_token(bytes_length=12)}',
            token_hash=sha256_text(access_token),
            user_id=str(row['user_id']),
            client_id=str(row['client_id']),
            project_id=str(row['project_id']),
            resource=str(row['resource']),
            scopes=str(row['scopes']),
            issued_at=now,
            expires_at=iso_after(seconds=ACCESS_TOKEN_LIFETIME_SECONDS),
        )
        self.oauth.create_refresh_token(
            token_id=f'refresh-{random_token(bytes_length=12)}',
            token_hash=sha256_text(refresh_token),
            family_id=family_id or f'family-{random_token(bytes_length=12)}',
            user_id=str(row['user_id']),
            client_id=str(row['client_id']),
            project_id=str(row['project_id']),
            resource=str(row['resource']),
            scopes=str(row['scopes']),
            issued_at=now,
            expires_at=iso_after(seconds=REFRESH_TOKEN_LIFETIME_SECONDS),
        )
        return {
            'access_token': access_token,
            'refresh_token': refresh_token,
            'token_type': 'Bearer',
            'expires_in': ACCESS_TOKEN_LIFETIME_SECONDS,
            'scope': str(row['scopes']),
        }

    @staticmethod
    def _parse_scopes(scope: str) -> list[str]:
        scopes = sorted(set(scope.split()))
        if not scopes:
            return sorted(VALID_SCOPES)
        if not set(scopes) <= VALID_SCOPES:
            raise ValidationError('Requested OAuth scopes are invalid.')
        return scopes

    def _require_scopes(self, user, project_id: str, scopes: list[str]) -> None:
        self.authorization_service.require_project_viewer(user, project_id)
        if not set(scopes) <= VALID_SCOPES:
            raise AuthorizationError('Requested scopes are not permitted.')

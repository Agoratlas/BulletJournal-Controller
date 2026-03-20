# Troubleshooting

## Login Fails

- confirm `BULLETJOURNAL_SESSION_SECRET` is set
- confirm the user exists and is active
- confirm `BULLETJOURNAL_COOKIE_SECURE` matches the deployment protocol

## Jobs Stay Failed

- inspect `logs/jobs/<job_id>.log`
- inspect the `jobs` table for `error_message`
- verify Docker and image access on the host

## Project Won't Start

- verify the project has a successful environment install
- inspect stored container metadata and host port allocation
- verify the BulletJournal runtime image contains the `bulletjournal` CLI

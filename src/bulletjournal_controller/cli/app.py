from __future__ import annotations

import argparse
import json

from bulletjournal_controller.cli.cleanup_instance import cleanup_instance
from bulletjournal_controller.cli.create_user import create_user
from bulletjournal_controller.cli.build_runtime import build_runtime
from bulletjournal_controller.cli.dev import dev_server
from bulletjournal_controller.cli.doctor import doctor
from bulletjournal_controller.cli.export_project import export_project
from bulletjournal_controller.cli.import_project import import_project
from bulletjournal_controller.cli.init_instance import init_instance
from bulletjournal_controller.cli.reconcile import reconcile
from bulletjournal_controller.cli.start import start_server


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="bulletjournal-controller",
        description="BulletJournal multi-project controller",
    )
    subparsers = parser.add_subparsers(dest="command")

    init_parser = subparsers.add_parser(
        "init-instance", help="Initialize a controller instance root"
    )
    init_parser.add_argument("path")

    start_parser = subparsers.add_parser("start", help="Start the controller server")
    start_parser.add_argument("instance_root")

    dev_parser = subparsers.add_parser(
        "dev", help="Start the controller server in development mode"
    )
    dev_parser.add_argument("instance_root")

    doctor_parser = subparsers.add_parser(
        "doctor", help="Validate controller instance state"
    )
    doctor_parser.add_argument("instance_root")

    user_parser = subparsers.add_parser(
        "create-user", help="Create an authenticated controller user"
    )
    user_parser.add_argument("instance_root")
    user_parser.add_argument("--username", required=True)
    user_parser.add_argument("--display-name", required=True)
    user_parser.add_argument("--password", default=None)
    user_parser.add_argument("--password-hash", default=None)
    user_parser.add_argument("--password-hash-stdin", action="store_true")
    user_parser.add_argument("--update", action="store_true")

    build_runtime_parser = subparsers.add_parser(
        "build-runtime",
        help="Build the local runtime image from the configured Dockerfile",
    )
    build_runtime_parser.add_argument("instance_root")

    cleanup_instance_parser = subparsers.add_parser(
        "cleanup-instance", help="Remove controller-managed containers for an instance"
    )
    cleanup_instance_parser.add_argument("instance_root")

    export_parser = subparsers.add_parser(
        "export-project", help="Export a managed project as a zip archive"
    )
    export_parser.add_argument("instance_root")
    export_parser.add_argument("project_id")
    export_parser.add_argument("archive")
    export_parser.add_argument("--without-artifacts", action="store_true")

    import_parser = subparsers.add_parser(
        "import-project", help="Import a managed project from a zip archive"
    )
    import_parser.add_argument("instance_root")
    import_parser.add_argument("archive")
    import_parser.add_argument("--project-id", default=None)
    import_parser.add_argument("--install", action="store_true")

    reconcile_parser = subparsers.add_parser(
        "reconcile", help="Run one idle/runtime reconciliation pass"
    )
    reconcile_parser.add_argument("instance_root")
    return parser


def app() -> None:
    parser = build_parser()
    args = parser.parse_args()
    if args.command == "init-instance":
        print(init_instance(args.path))
        return
    if args.command == "start":
        start_server(args.instance_root)
        return
    if args.command == "dev":
        dev_server(args.instance_root)
        return
    if args.command == "doctor":
        print(json.dumps(doctor(args.instance_root), indent=2, sort_keys=True))
        return
    if args.command == "create-user":
        print(
            json.dumps(
                create_user(
                    args.instance_root,
                    username=args.username,
                    display_name=args.display_name,
                    password=args.password,
                    password_hash=args.password_hash,
                    password_hash_stdin=args.password_hash_stdin,
                    update=args.update,
                ),
                indent=2,
                sort_keys=True,
            )
        )
        return
    if args.command == "build-runtime":
        print(json.dumps(build_runtime(args.instance_root), indent=2, sort_keys=True))
        return
    if args.command == "cleanup-instance":
        print(
            json.dumps(cleanup_instance(args.instance_root), indent=2, sort_keys=True)
        )
        return
    if args.command == "export-project":
        print(
            json.dumps(
                export_project(
                    args.instance_root,
                    args.project_id,
                    args.archive,
                    include_artifacts=not args.without_artifacts,
                ),
                indent=2,
                sort_keys=True,
            )
        )
        return
    if args.command == "import-project":
        print(
            json.dumps(
                import_project(
                    args.instance_root,
                    args.archive,
                    project_id_override=args.project_id,
                    include_install=args.install,
                ),
                indent=2,
                sort_keys=True,
            )
        )
        return
    if args.command == "reconcile":
        print(json.dumps(reconcile(args.instance_root), indent=2, sort_keys=True))
        return
    parser.print_help()

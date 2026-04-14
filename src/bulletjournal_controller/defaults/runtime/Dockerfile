FROM python:3.11-slim

ARG BULLETJOURNAL_UID=1000
ARG BULLETJOURNAL_GID=1000

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1 \
    HOME=/home/bulletjournal

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        ca-certificates \
        git \
        openssh-client \
    && rm -rf /var/lib/apt/lists/*

RUN python -m pip install --no-cache-dir --upgrade pip uv

RUN groupadd --non-unique --gid "${BULLETJOURNAL_GID}" bulletjournal \
    && useradd \
        --non-unique \
        --uid "${BULLETJOURNAL_UID}" \
        --gid "${BULLETJOURNAL_GID}" \
        --create-home \
        --home-dir /home/bulletjournal \
        --shell /bin/bash \
        bulletjournal \
    && mkdir -p /home/bulletjournal/.ssh \
    && chown -R bulletjournal:bulletjournal /home/bulletjournal

WORKDIR /project

USER bulletjournal

CMD ["python3", "--version"]

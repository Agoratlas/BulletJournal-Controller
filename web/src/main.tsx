import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import type { CSSProperties, SVGProps } from 'react'

type SessionUser = {
  user_id: string
  username: string
  display_name: string
  is_active: boolean
}

type SessionResponse = {
  authenticated: boolean
  user: SessionUser | null
}

type JobRecord = {
  job_id: string
  project_id: string | null
  job_type: string
  status: string
  requested_by_user_id: string
  payload_json: string
  result_json: string | null
  log_path: string
  created_at: string
  started_at: string | null
  finished_at: string | null
  error_message: string | null
}

type Project = {
  project_id: string
  status: string
  status_reason: string | null
  has_active_job: boolean
  root_path: string
  created_at: string
  updated_at: string
  last_edit_at: string | null
  last_run_finished_at: string | null
  idle_shutdown_eligible_at: string | null
  python_version: string
  bulletjournal_version: string
  custom_requirements_text: string
  lock_sha256: string | null
  install_status: string
  last_install_at: string | null
  limits: {
    cpu_limit_millis: number | null
    memory_limit_bytes: number | null
    disk_soft_limit_bytes: number | null
    gpu_enabled: boolean
  }
  runtime: {
    container_name: string | null
    container_id: string | null
    container_port: number | null
    runtime_started_at: string | null
    runtime_stopped_at: string | null
  }
  metrics: {
    cpu_percent?: number | null
    memory_used_bytes?: number | null
    memory_limit_bytes?: number | null
    disk_used_bytes?: number | null
  }
  recent_jobs?: JobRecord[]
}

type SystemInfo = {
  instance_id: string
  title: string
  default_python_version: string
  default_bulletjournal_version: string
  default_dependencies_text: string
  project_count: number
  metrics: {
    cpu_percent: number | null
    memory: {
      used_bytes: number
      total_bytes: number
    } | null
    disk: {
      used_bytes: number
      total_bytes: number
    }
  }
}

type ThemeMode = 'system' | 'light' | 'dark'

type ProjectActionJobResponse = {
  job: JobRecord | null
  project?: Project | null
  already_running?: boolean
  already_stopped?: boolean
}

type OptimisticProjectAction = {
  action: 'start' | 'stop'
  jobId?: string
}

type AppState = {
  session: SessionResponse | null
  sessionLoading: boolean
  refreshSession: () => Promise<void>
  signOut: () => Promise<void>
  themeMode: ThemeMode
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>
}

const AppContext = React.createContext<AppState | null>(null)

const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

const style = document.createElement('style')
style.textContent = `
  :root {
    --bg: #f4efdf;
    --bg-2: #e9ddc0;
    --paper: rgba(255, 251, 243, 0.88);
    --paper-strong: rgba(255, 251, 243, 0.96);
    --paper-faint: rgba(255, 255, 255, 0.56);
    --ink: #1f2929;
    --muted: #61716d;
    --accent: #1d7b6c;
    --accent-soft: rgba(29, 123, 108, 0.12);
    --accent-strong: #228f47;
    --warm: #b86435;
    --warm-soft: rgba(184, 100, 53, 0.12);
    --danger: #b23a33;
    --danger-soft: rgba(178, 58, 51, 0.12);
    --warning: #c87418;
    --warning-soft: rgba(200, 116, 24, 0.14);
    --warning-bg: rgba(226, 150, 65, 0.82);
    --danger-bg: rgba(222, 92, 86, 0.82);
    --info: #246bca;
    --info-soft: rgba(36, 107, 202, 0.14);
    --info-strong: #1f6ff0;
    --success-bg: rgba(113, 214, 170, 0.86);
    --stopped-bg: rgba(170, 178, 176, 0.54);
    --error-bg: rgba(239, 131, 123, 0.84);
    --line: rgba(31, 41, 41, 0.12);
    --shadow: 0 18px 54px rgba(39, 42, 40, 0.12);
    --editor-grid: 20px;
    --radius-xl: 28px;
    --radius-lg: 20px;
    --radius-md: 14px;
  }
  :root[data-theme='dark'] {
    --bg: #171714;
    --bg-2: #21211d;
    --paper: rgba(32, 33, 29, 0.88);
    --paper-strong: rgba(28, 29, 26, 0.96);
    --paper-faint: rgba(255, 255, 255, 0.06);
    --ink: #efe7d8;
    --muted: #b7afa2;
    --accent: #63c4b2;
    --accent-soft: rgba(99, 196, 178, 0.14);
    --accent-strong: #34b85a;
    --warm: #d89063;
    --warm-soft: rgba(216, 144, 99, 0.16);
    --danger: #ef8a7f;
    --danger-soft: rgba(239, 138, 127, 0.14);
    --warning: #efb35f;
    --warning-soft: rgba(239, 179, 95, 0.16);
    --warning-bg: rgba(190, 124, 43, 0.82);
    --danger-bg: rgba(196, 83, 76, 0.82);
    --info: #7cb0ff;
    --info-soft: rgba(124, 176, 255, 0.16);
    --info-strong: #5f96ff;
    --success-bg: rgba(32, 143, 118, 0.82);
    --stopped-bg: rgba(98, 108, 108, 0.42);
    --error-bg: rgba(173, 68, 61, 0.82);
    --line: rgba(239, 231, 216, 0.12);
    --shadow: 0 18px 54px rgba(0, 0, 0, 0.28);
  }
  * { box-sizing: border-box; }
  html, body, #root { min-height: 100%; }
  body {
    margin: 0;
    color: var(--ink);
    font-family: Georgia, 'Iowan Old Style', serif;
    background:
      radial-gradient(circle, rgba(24, 53, 43, 0.24) 1.1px, transparent 1.3px) 0 0 / var(--editor-grid) var(--editor-grid),
      linear-gradient(180deg, #faf6ed 0%, var(--bg) 100%);
  }
  :root[data-theme='dark'] body {
    background:
      radial-gradient(circle, rgba(236, 229, 213, 0.16) 1.1px, transparent 1.3px) 0 0 / var(--editor-grid) var(--editor-grid),
      linear-gradient(180deg, #1f1d1a 0%, var(--bg) 100%);
  }
  button, input, textarea, select {
    font: inherit;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .app-shell {
    max-width: 1240px;
    margin: 0 auto;
    padding: 28px 18px 132px;
  }
  .muted {
    color: var(--muted);
  }
  .nav-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
    margin-bottom: 20px;
  }
  .pill-link,
  .pill-button,
  .button,
  .button-saved,
  .button-open,
  .button-neutral,
  .button-status-start,
  .button-status-stop,
  .button-secondary,
  .button-danger,
  .theme-option {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 42px;
    padding: 0 15px;
    border-radius: 999px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: transform 120ms ease, box-shadow 120ms ease, background-color 120ms ease;
  }
  .icon-action {
    width: 42px;
    min-height: 42px;
    padding: 0;
  }
  .icon-action svg {
    width: 18px;
    height: 18px;
    display: block;
    transform: translateY(0);
  }
  .button-secondary.icon-action {
    width: 42px;
    min-height: 42px;
    padding: 0;
    border-radius: 999px;
  }
  .button-back {
    min-width: 42px;
    padding: 0;
  }
  .info-glyph {
    font-size: 20px;
    line-height: 1;
    font-style: italic;
    font-weight: 600;
    font-family: Georgia, 'Iowan Old Style', serif;
    display: inline-block;
    transform: translateY(0.5px);
  }
  .pill-link,
  .button-secondary {
    background: rgba(255, 255, 255, 0.58);
    border-color: var(--line);
    color: var(--ink);
  }
  .pill-link.active {
    background: var(--accent-soft);
    color: var(--accent);
    border-color: rgba(29, 123, 108, 0.25);
  }
  :root[data-theme='dark'] .pill-link.active {
    border-color: rgba(99, 196, 178, 0.3);
  }
  .button,
  .pill-button {
    background: var(--accent-strong);
    color: white;
    box-shadow: 0 12px 28px rgba(52, 184, 90, 0.26);
  }
  .button-open {
    background: var(--info-strong);
    color: white;
    box-shadow: 0 12px 28px rgba(31, 111, 240, 0.22);
  }
  .button-saved {
    background: var(--accent-strong);
    color: white;
    box-shadow: 0 12px 28px rgba(52, 184, 90, 0.26);
  }
  .button-neutral,
  .button-status-start,
  .button-status-stop {
    color: white;
  }
  .button-status-start {
    background: var(--accent-strong);
    box-shadow: 0 12px 28px rgba(52, 184, 90, 0.26);
  }
  .button-status-stop {
    background: #de5c56;
    box-shadow: 0 12px 28px rgba(222, 92, 86, 0.22);
  }
  .button-neutral {
    background: rgba(98, 108, 108, 0.18);
    border-color: var(--line);
    color: var(--muted);
    box-shadow: none;
  }
  .button-danger {
    background: #d13c36;
    color: white;
    box-shadow: 0 12px 28px rgba(209, 60, 54, 0.24);
  }
  .pill-link:hover,
  .pill-button:hover,
  .button:hover,
  .button-secondary:hover,
  .button-danger:hover {
    transform: translateY(-1px);
  }
  .layout-grid {
    display: grid;
    gap: 20px;
  }
  .dashboard-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(0, 1fr);
  }
  .panel {
    border-radius: var(--radius-xl);
    background: var(--paper);
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
    backdrop-filter: blur(10px);
    overflow: visible;
  }
  .panel-head {
    padding: 22px 24px 0;
  }
  .panel-head-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }
  .panel-body {
    padding: 22px 24px 24px;
  }
  .panel-head h2,
  .panel-head h3,
  .panel-body h2,
  .panel-body h3 {
    margin: 0 0 6px;
    font-size: 1.5rem;
  }
  .section-copy {
    margin: 0;
    color: var(--muted);
    line-height: 1.55;
  }
  .group-list {
    display: grid;
    gap: 18px;
  }
  .group-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }
  .group-header-title {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    flex: 1;
  }
  .group-header-divider {
    height: 1px;
    flex: 1;
    min-width: 28px;
    background: var(--line);
  }
  .group-header h3 {
    margin: 0;
    font-size: 1.25rem;
  }
  .project-cards {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .project-card {
    display: grid;
    gap: 14px;
    padding: 0 18px 18px;
    border-radius: var(--radius-lg);
    background: var(--paper-faint);
    border: 1px solid var(--line);
    overflow: hidden;
  }
  .project-card-header {
    padding: 16px 18px 0;
    margin: 0 -18px;
  }
  .project-card.state-running .project-card-header {
    background: var(--success-bg);
  }
  .project-card.state-busy .project-card-header {
    background: rgba(96, 165, 250, 0.88);
  }
  .project-card.state-stopped .project-card-header {
    background: var(--stopped-bg);
  }
  .project-card.state-error .project-card-header {
    background: var(--error-bg);
  }
  .project-card-top {
    display: grid;
    gap: 14px;
  }
  .project-card h4 {
    margin: 0;
    font-size: 1.2rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
  .project-card-divider {
    border: 0;
    border-top: 1px solid var(--line);
    width: calc(100% + 36px);
    margin: 0 -18px;
  }
  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 9px;
    border-radius: 999px;
    font-size: 0.78rem;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    background: rgba(31, 41, 41, 0.06);
    color: var(--ink);
  }
  .badge.running { background: rgba(29, 123, 108, 0.14); color: var(--accent); }
  .badge.stopped { background: rgba(96, 112, 109, 0.14); color: #536260; }
  .badge.error { background: rgba(184, 100, 53, 0.14); color: var(--warm); }
  .badge.install-ready { background: rgba(29, 123, 108, 0.12); color: var(--accent); }
  .badge.install-failed { background: rgba(184, 100, 53, 0.14); color: var(--warm); }
  .badge.neutral { background: rgba(98, 108, 108, 0.14); color: var(--muted); }
  .meta-grid {
    display: grid;
    gap: 12px;
    margin-top: 0;
  }
  .metrics-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }
  .meta-item {
    display: grid;
    gap: 6px;
  }
  .metrics-row .meta-item {
    text-align: center;
    justify-items: center;
  }
  .metrics-row .metric-chip {
    font-variant-numeric: tabular-nums;
  }
  .meta-item strong {
    line-height: 1.2;
  }
  .metrics-row .meta-item strong {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
  .meta-item span:first-child {
    color: var(--muted);
    font-size: 0.85rem;
  }
  .metric-chip {
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid transparent;
    background: rgba(31, 41, 41, 0.05);
  }
  .metric-chip.metric-warning {
    background: var(--warning-bg);
    border-color: rgba(200, 116, 24, 0.2);
  }
  .metric-chip.metric-danger {
    background: var(--danger-bg);
    border-color: rgba(178, 58, 51, 0.24);
  }
  .timestamp-row {
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;
  }
  .timestamp-row strong {
    font-size: 0.95rem;
  }
  .quick-actions,
  .button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .action-menu {
    position: relative;
  }
  .action-popover {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 0;
    z-index: 20;
    min-width: 180px;
    width: max-content;
    max-width: min(260px, calc(100vw - 48px));
    display: grid;
    gap: 8px;
    padding: 10px;
    border-radius: 16px;
    border: 1px solid rgba(31, 41, 41, 0.14);
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.16);
  }
  .action-option {
    width: 100%;
    display: grid;
    gap: 4px;
    padding: 12px 14px;
    border-radius: 12px;
    border: 1px solid rgba(31, 41, 41, 0.12);
    background: transparent;
    color: inherit;
    text-align: left;
    cursor: pointer;
  }
  .action-option:hover:not(:disabled) {
    border-color: rgba(29, 123, 108, 0.22);
    background: var(--accent-soft);
  }
  .action-option:disabled {
    opacity: 0.6;
    cursor: wait;
  }
  .action-option strong {
    font-size: 0.95rem;
  }
  .action-option span {
    color: var(--muted);
    font-size: 0.86rem;
    line-height: 1.4;
  }
  @media (max-width: 640px) {
    .action-popover {
      left: 0;
      right: auto;
      max-width: calc(100vw - 48px);
    }
  }
  .project-actions-row {
    justify-content: flex-start;
    align-items: center;
  }
  .button-row.centered {
    justify-content: center;
  }
  .jobs-list-footer {
    margin-bottom: -12px;
  }
  .quick-actions {
    margin-top: 0;
  }
  .inline-feedback {
    display: inline-flex;
    align-items: center;
    min-height: 42px;
    padding: 0 14px;
    border-radius: 999px;
    border: 1px solid transparent;
    font-size: 0.92rem;
    transition: opacity 160ms ease;
  }
  .inline-feedback.pending {
    background: var(--accent-soft);
    border-color: rgba(29, 123, 108, 0.18);
    color: var(--accent);
    animation: pulse 1.2s ease-in-out infinite;
  }
  .inline-feedback.success {
    background: rgba(29, 123, 108, 0.1);
    border-color: rgba(29, 123, 108, 0.14);
    color: #145b50;
  }
  .inline-feedback.subtle {
    min-height: auto;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    color: var(--muted);
    font-size: 0.9rem;
  }
  .field-grid {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .field,
  .field-full {
    display: grid;
    gap: 8px;
  }
  .field-full {
    grid-column: 1 / -1;
  }
  label {
    font-size: 0.9rem;
    color: var(--muted);
  }
  .field label,
  .field-full label,
  .meta-item > span:first-child,
  .detail-label,
  .lockfile-label {
    font-weight: 600;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 12px 14px;
    border-radius: var(--radius-md);
    border: 1px solid rgba(31, 41, 41, 0.16);
    background: rgba(255, 255, 255, 0.78);
    color: var(--ink);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
  :root[data-theme='dark'] input,
  :root[data-theme='dark'] textarea,
  :root[data-theme='dark'] select,
  :root[data-theme='dark'] .checkbox-row,
  :root[data-theme='dark'] .close-button,
  :root[data-theme='dark'] .pill-link,
  :root[data-theme='dark'] .button-secondary,
  :root[data-theme='dark'] .button-neutral,
  :root[data-theme='dark'] .project-card:not(.state-running):not(.state-error),
  :root[data-theme='dark'] .metric-chip:not(.metric-warning):not(.metric-danger),
  :root[data-theme='dark'] .job-row,
  :root[data-theme='dark'] .summary-block,
  :root[data-theme='dark'] .detail-row,
  :root[data-theme='dark'] .lockfile-row,
  :root[data-theme='dark'] .limits-card,
  :root[data-theme='dark'] .hero-note,
  :root[data-theme='dark'] .empty-state {
    background: rgba(255, 255, 255, 0.06);
    color: var(--ink);
    border-color: var(--line);
  }
  :root[data-theme='dark'] .project-detail-card {
    background: var(--paper);
    color: var(--ink);
    border-color: var(--line);
  }
  :root[data-theme='dark'] .action-popover {
    background: rgba(10, 10, 12, 0.98);
    border-color: var(--line);
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.35);
  }
  :root[data-theme='dark'] .action-option {
    border-color: var(--line);
    background: rgba(255, 255, 255, 0.02);
  }
  textarea {
    min-height: 180px;
    resize: vertical;
    line-height: 1.45;
  }
  input:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid rgba(29, 123, 108, 0.22);
    border-color: rgba(29, 123, 108, 0.38);
  }
  .checkbox-row {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 48px;
    padding: 0 14px;
    border-radius: var(--radius-md);
    border: 1px solid rgba(31, 41, 41, 0.16);
    background: rgba(255, 255, 255, 0.78);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
  .checkbox-row input {
    width: auto;
    margin: 0;
  }
  .notice,
  .error-banner,
  .success-banner {
    padding: 12px 14px;
    border-radius: 16px;
    line-height: 1.45;
  }
  .notice {
    background: rgba(29, 123, 108, 0.09);
    color: var(--accent);
  }
  .error-banner {
    background: rgba(184, 100, 53, 0.12);
    color: #8f4824;
  }
  .success-banner {
    background: rgba(29, 123, 108, 0.1);
    color: #145b50;
  }
  .empty-state {
    padding: 20px;
    border-radius: var(--radius-lg);
    border: 1px dashed rgba(31, 41, 41, 0.18);
    color: var(--muted);
    background: rgba(255, 255, 255, 0.38);
  }
  .jobs-list {
    display: grid;
    gap: 12px;
    align-content: start;
  }
  .job-row {
    display: grid;
    gap: 8px;
    padding: 0 16px 16px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.58);
    border: 1px solid var(--line);
    overflow: hidden;
  }
  .job-row-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 14px 16px 12px;
    margin: 0 -16px;
  }
  .job-row.state-succeeded .job-row-header {
    background: var(--success-bg);
  }
  .job-row.state-running .job-row-header {
    background: rgba(96, 165, 250, 0.88);
  }
  .job-row.state-failed .job-row-header {
    background: var(--error-bg);
  }
  .job-row-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
  .job-row-meta {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .job-row-meta .meta-item:last-child {
    justify-items: end;
    text-align: right;
  }
  .detail-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
    align-items: start;
  }
  .project-detail-stack {
    display: grid;
    gap: 20px;
  }
  .summary-grid {
    display: grid;
    gap: 18px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .summary-block {
    padding: 18px;
    border-radius: var(--radius-lg);
    background: rgba(255, 255, 255, 0.58);
    border: 1px solid var(--line);
  }
  .summary-block h3 {
    margin: 0 0 12px;
    font-size: 1.12rem;
  }
  .summary-block.compact {
    display: grid;
    gap: 6px;
  }
  .project-detail-card {
    display: grid;
    gap: 18px;
    padding: 0 18px 18px;
    border-radius: var(--radius-xl);
    background: var(--paper);
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
    overflow: hidden;
  }
  .project-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 18px 18px 16px;
    margin: 0 -18px;
  }
  .project-detail-card.state-running .project-detail-header {
    background: var(--success-bg);
  }
  .project-detail-card.state-busy .project-detail-header {
    background: rgba(96, 165, 250, 0.88);
  }
  .project-detail-card.state-stopped .project-detail-header {
    background: var(--stopped-bg);
  }
  .project-detail-card.state-error .project-detail-header {
    background: var(--error-bg);
  }
  .project-detail-title,
  .project-detail-status {
    display: grid;
    gap: 6px;
    min-width: 0;
  }
  .project-detail-title h2,
  .project-detail-status strong {
    margin: 0;
  }
  .project-detail-title h2 {
    font-size: 1.75rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
  .project-detail-status {
    justify-items: end;
    text-align: right;
  }
  .detail-meta-grid {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .detail-row {
    display: grid;
    gap: 6px;
    padding: 14px 16px;
    border-radius: 16px;
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.52);
  }
  .detail-label,
  .lockfile-label {
    color: var(--muted);
    font-size: 0.85rem;
  }
  .detail-value {
    font-weight: 600;
    line-height: 1.3;
    overflow-wrap: anywhere;
  }
  .project-env-grid {
    display: grid;
    gap: 16px;
  }
  .environment-overview-card {
    display: grid;
    gap: 14px;
  }
  .environment-overview-card .summary-grid {
    gap: 14px;
    grid-template-columns: minmax(0, 0.25fr) minmax(0, 0.75fr);
  }
  .lockfile-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    padding: 14px 16px;
    border-radius: 16px;
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.52);
  }
  .lockfile-meta {
    display: grid;
    gap: 6px;
    min-width: 0;
  }
  .lockfile-row.compact {
    padding: 0;
    border: 0;
    background: transparent;
    align-items: end;
    box-shadow: none;
  }
  .lockfile-meta code {
    overflow-wrap: anywhere;
  }
  .limits-card {
    display: grid;
    gap: 16px;
    padding: 16px;
    border-radius: 18px;
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.48);
  }
  .limits-card-header {
    display: grid;
    gap: 6px;
  }
  .mono-copy {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.88rem;
  }
  .timestamp-pair {
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;
  }
  .timestamp-pair strong,
  .timestamp-pair .detail-value {
    font-size: 0.95rem;
  }
  .modal-backdrop {
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    padding: 18px;
    background: rgba(30, 35, 34, 0.34);
    backdrop-filter: blur(10px);
    z-index: 50;
  }
  .modal {
    width: min(920px, 100%);
    max-height: min(92vh, 980px);
    overflow: auto;
    border-radius: 28px;
    background: var(--paper-strong);
    border: 1px solid var(--line);
    box-shadow: 0 28px 70px rgba(28, 33, 31, 0.22);
  }
  .modal-head,
  .modal-body {
    padding: 22px 24px;
  }
  .modal-head {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 16px;
    border-bottom: 1px solid var(--line);
  }
  .modal-head h2 {
    margin: 10px 0 6px;
    font-size: 1.8rem;
  }
  .close-button {
    min-width: 42px;
    width: 42px;
    height: 42px;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: rgba(255,255,255,0.75);
    cursor: pointer;
  }
  .login-shell {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 24px;
  }
  .login-panel {
    width: min(420px, 100%);
    display: grid;
    gap: 20px;
    padding: 26px;
    border-radius: 28px;
    background: var(--paper);
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
  }
  .login-panel h1 {
    margin: 12px 0 10px;
  }
  .login-panel h1 {
    font-size: clamp(1.4rem, 3vw, 1.8rem);
  }
  .login-divider {
    margin: 2px 0 0;
    border: 0;
    border-top: 1px solid var(--line);
  }
  .loading-screen {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 24px;
  }
  .loading-card {
    padding: 26px 28px;
    border-radius: 24px;
    background: var(--paper);
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
  }
  .theme-trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 100%;
    border: 0;
    background: inherit;
    box-shadow: none;
    cursor: pointer;
    color: var(--ink);
  }
  .footer-theme {
    position: relative;
    display: flex;
    align-items: stretch;
    align-self: stretch;
    background: transparent;
  }
  .theme-popover {
    position: absolute;
    right: 0;
    bottom: calc(100% + 10px);
    width: 180px;
    padding: 8px;
    border-radius: 16px;
    border: 1px solid var(--line);
    background: var(--paper-strong);
    box-shadow: var(--shadow);
    display: grid;
    gap: 6px;
  }
  .theme-option {
    width: 100%;
    justify-content: flex-start;
    min-height: 38px;
    padding: 0 12px;
    border-radius: 12px;
    border: 1px solid transparent;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }
  .theme-option.active {
    background: var(--accent-soft);
    color: var(--accent);
  }
  .app-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 40;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0;
    padding: 0 0 0 18px;
    border-top: 1px solid var(--line);
    background: var(--paper-strong);
    box-shadow: var(--shadow);
    backdrop-filter: blur(16px);
    min-height: 48px;
  }
  .footer-left,
  .footer-right {
    display: flex;
    align-items: center;
    gap: 0;
    min-width: 0;
    align-self: stretch;
  }
  .footer-session {
    display: flex;
    align-items: baseline;
    gap: 6px;
    min-width: 0;
    flex-wrap: wrap;
  }
  .footer-session strong,
  .footer-session span {
    overflow-wrap: anywhere;
  }
  .footer-left {
    gap: 18px;
  }
  .logout-link {
    color: var(--danger);
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
  }
  .footer-metrics {
    display: flex;
    align-items: stretch;
    gap: 0;
    justify-content: flex-end;
    align-self: stretch;
  }
  .footer-metric {
    display: inline-flex;
    position: relative;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    padding: 0 12px;
    border: 0;
    background: transparent;
    white-space: nowrap;
    overflow: hidden;
    isolation: isolate;
  }
  .footer-metric > * {
    position: relative;
    z-index: 1;
  }
  .footer-metric::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(var(--metric-percent, 0) * 1%);
    background: var(--metric-fill, transparent);
    pointer-events: none;
    z-index: 0;
  }
  .footer-metric.metric-ok {
    --metric-fill: var(--success-bg);
  }
  .footer-metric::before,
  .footer-theme::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--line);
    pointer-events: none;
  }
  .footer-metric.metric-warning {
    --metric-fill: var(--warning-bg);
  }
  .footer-metric.metric-danger {
    --metric-fill: var(--danger-bg);
  }
  .collapsible-panel {
    display: grid;
    gap: 16px;
  }
  .section-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.45);
  }
  .section-toggle strong {
    display: block;
  }
  .loading-inline {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }
  .spinner {
    width: 18px;
    height: 18px;
    border-radius: 999px;
    border: 2px solid rgba(29, 123, 108, 0.18);
    border-top-color: var(--accent);
    animation: spin 1s linear infinite;
  }
  .spinner.large {
    width: 48px;
    height: 48px;
    border-width: 4px;
    margin: 0 auto;
  }
  .status-stack {
    display: grid;
    gap: 6px;
  }
  .job-log-preview {
    position: relative;
    --job-log-scrollbar-width: 0px;
  }
  .job-log-frame {
    border-radius: var(--radius-md);
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.4);
    overflow: hidden;
  }
  .job-log-preview pre {
    margin: 0;
    padding: 12px 14px;
    background: transparent;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.75rem;
    line-height: 1.45;
    white-space: pre-wrap;
    word-break: break-word;
    max-height: 260px;
    overflow: auto;
    scrollbar-color: rgba(31, 41, 41, 0.28) rgba(255, 255, 255, 0.4);
  }
  .job-log-preview pre::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  .job-log-preview pre::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.4);
  }
  .job-log-preview pre::-webkit-scrollbar-thumb {
    background: rgba(31, 41, 41, 0.28);
    border-radius: 999px;
    border: 3px solid rgba(255, 255, 255, 0.4);
  }
  .job-log-preview pre::-webkit-scrollbar-corner {
    background: rgba(255, 255, 255, 0.4);
  }
  .job-log-download {
    position: absolute;
    top: 10px;
    right: calc(10px + var(--job-log-scrollbar-width));
    display: inline-grid;
    place-items: center;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: rgba(255, 251, 243, 0.98);
    color: rgba(31, 41, 41, 0.96);
    cursor: pointer;
    box-shadow: 0 10px 22px rgba(39, 42, 40, 0.22);
    transition: transform 120ms ease, background 120ms ease, box-shadow 120ms ease;
    z-index: 1;
  }
  .job-log-download:hover:not(:disabled) {
    transform: translateY(-1px);
    background: rgba(255, 251, 243, 1);
    box-shadow: 0 12px 24px rgba(39, 42, 40, 0.28);
  }
  .job-log-download:disabled {
    cursor: progress;
    opacity: 0.72;
  }
  .job-log-download svg {
    width: 16px;
    height: 16px;
    display: block;
    transform: translateY(0.5px);
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.78; transform: translateY(0); }
    50% { opacity: 1; transform: translateY(-1px); }
  }
  :root[data-theme='dark'] .section-toggle,
  :root[data-theme='dark'] .job-log-download,
  :root[data-theme='dark'] .footer-metric:not(.metric-ok):not(.metric-warning):not(.metric-danger) {
    background: rgba(24, 27, 25, 0.92);
    color: rgba(239, 231, 216, 0.96);
    border-color: var(--line);
  }
  :root[data-theme='dark'] .job-log-frame {
    background: #000;
  }
  :root[data-theme='dark'] .job-log-preview pre {
    scrollbar-color: rgba(239, 231, 216, 0.24) #000;
  }
  :root[data-theme='dark'] .job-log-preview pre::-webkit-scrollbar-track {
    background: #000;
  }
  :root[data-theme='dark'] .job-log-preview pre::-webkit-scrollbar-thumb {
    background: rgba(239, 231, 216, 0.24);
    border-color: #000;
  }
  :root[data-theme='dark'] .job-log-preview pre::-webkit-scrollbar-corner {
    background: #000;
  }
  :root[data-theme='dark'] .lockfile-row.compact {
    background: transparent;
    border-color: transparent;
  }
  :root[data-theme='dark'] .theme-trigger {
    color: rgba(239, 231, 216, 0.96);
  }
  .subtle-link {
    color: var(--warm);
  }
  @media (max-width: 1040px) {
    .detail-grid,
    .project-cards {
      grid-template-columns: 1fr;
    }
  }
  @media (min-width: 761px) and (max-width: 1160px) {
    .project-cards {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (max-width: 760px) {
    .topbar,
    .group-header,
    .job-row-top,
    .modal-head {
      grid-template-columns: 1fr;
      display: grid;
    }
    .panel-head-row,
    .group-header-title {
      display: grid;
      gap: 8px;
    }
    .group-header-divider {
      width: 100%;
    }
    .field-grid,
    .summary-grid,
    .meta-grid,
    .metrics-row,
    .detail-meta-grid {
      grid-template-columns: 1fr;
    }
    .app-shell {
      padding: 18px 14px 170px;
    }
    .app-footer {
      display: grid;
      justify-content: stretch;
    }
    .footer-left,
    .footer-right {
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .footer-right {
      align-items: flex-end;
    }
  }
`
document.head.appendChild(style)

function classNames(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

function IconBase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props} />
  )
}

function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </IconBase>
  )
}

function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M6.4 5.3Q6.4 4 7.6 4.7L18 10.8Q19.8 12 18 13.2L7.6 19.3Q6.4 20 6.4 18.7Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </IconBase>
  )
}

function PencilIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m15 5 4 4" />
      <path d="M4 20h4l11-11a1.4 1.4 0 0 0 0-2L17 5a1.4 1.4 0 0 0-2 0L4 16v4Z" />
    </IconBase>
  )
}

function StopIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="6.25" y="6.25" width="11.5" height="11.5" rx="1.5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
    </IconBase>
  )
}

function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M19 12H5" />
      <path d="m12 5-7 7 7 7" />
    </IconBase>
  )
}

function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 4v10" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M4 20h16" />
    </IconBase>
  )
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
    ...init,
  })

  if (response.status === 204) {
    return undefined as T
  }

  const contentType = response.headers.get('content-type') || ''
  const payload = contentType.includes('application/json') ? await response.json() : await response.text()

  if (!response.ok) {
    const detail = typeof payload === 'object' && payload !== null && 'detail' in payload ? String((payload as { detail: unknown }).detail) : response.statusText
    throw new Error(detail || 'Request failed.')
  }

  return payload as T
}

function formatDateTime(value: string | null | undefined): string {
  if (!value) {
    return 'Not available'
  }
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return value
  }
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date)
}

function formatBytes(value: number): string {
  if (!Number.isFinite(value) || value <= 0) {
    return '0 B'
  }
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let current = value
  let index = 0
  while (current >= 1024 && index < units.length - 1) {
    current /= 1024
    index += 1
  }
  return `${current.toFixed(current >= 10 || index === 0 ? 0 : 1)} ${units[index]}`
}

function formatMemoryLimit(value: number | null | undefined): string {
  if (!Number.isFinite(value) || !value || value <= 0) {
    return 'No limit'
  }
  return `${(value / (1024 ** 3)).toFixed(value >= 10 * 1024 ** 3 ? 0 : 1)} GB`
}

function formatDiskSoftLimit(value: number | null | undefined): string {
  return formatMemoryLimit(value)
}

function formatCpuLimit(value: number | null | undefined): string {
  if (!Number.isFinite(value) || !value || value <= 0) {
    return 'No limit'
  }
  const cpuCount = value / 1000
  return `${cpuCount % 1 === 0 ? cpuCount.toFixed(0) : cpuCount.toFixed(1)} CPU`
}

function parseCpuInputToMillis(value: string): number | null {
  const trimmed = value.trim()
  if (!trimmed) {
    return null
  }
  const parsed = Number(trimmed)
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return null
  }
  return Math.round(parsed * 1000)
}

function parseMemoryInputToBytes(value: string): number | null {
  const trimmed = value.trim()
  if (!trimmed) {
    return null
  }
  const parsed = Number(trimmed)
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return null
  }
  return Math.round(parsed * 1024 ** 3)
}

function parseDiskInputToBytes(value: string): number | null {
  return parseMemoryInputToBytes(value)
}

function formatCpuInputValue(value: number | null | undefined): string {
  if (!Number.isFinite(value) || !value || value <= 0) {
    return ''
  }
  const cpuCount = value / 1000
  return cpuCount % 1 === 0 ? cpuCount.toFixed(0) : cpuCount.toFixed(1)
}

function formatMemoryInputValue(value: number | null | undefined): string {
  if (!Number.isFinite(value) || !value || value <= 0) {
    return ''
  }
  const gb = value / (1024 ** 3)
  return gb >= 10 || gb % 1 === 0 ? gb.toFixed(0) : gb.toFixed(1)
}

function formatDiskInputValue(value: number | null | undefined): string {
  return formatMemoryInputValue(value)
}

function formatPercentage(value: number | null | undefined): string {
  if (!Number.isFinite(value)) {
    return '-'
  }
  return `${Number(value).toFixed(1)}%`
}

function formatRelativeTime(value: string | null | undefined): string {
  if (!value) {
    return '-'
  }
  const timestamp = new Date(value).getTime()
  if (Number.isNaN(timestamp)) {
    return '-'
  }
  const diffMs = Date.now() - timestamp
  if (diffMs < 0) {
    return 'Just now'
  }
  const minute = 60_000
  const hour = 60 * minute
  const day = 24 * hour
  if (diffMs < hour) {
    const minutes = Math.max(1, Math.floor(diffMs / minute))
    return `${minutes}m ago`
  }
  if (diffMs < day) {
    return `${Math.floor(diffMs / hour)}h ago`
  }
  return `${Math.floor(diffMs / day)}d ago`
}

function metricTone(percent: number | null | undefined): '' | 'metric-ok' | 'metric-warning' | 'metric-danger' {
  if (!Number.isFinite(percent)) {
    return ''
  }
  if (Number(percent) > 80) {
    return 'metric-danger'
  }
  if (Number(percent) > 60) {
    return 'metric-warning'
  }
  return 'metric-ok'
}

function metricFillStyle(percent: number | null | undefined): React.CSSProperties | undefined {
  if (!Number.isFinite(percent)) {
    return undefined
  }

  const clampedPercent = Math.max(0, Math.min(100, Number(percent)))
  return {
    '--metric-percent': clampedPercent,
  } as React.CSSProperties
}

function usagePercent(used: number | null | undefined, total: number | null | undefined): number | null {
  if (!Number.isFinite(used) || !Number.isFinite(total) || !total || total <= 0) {
    return null
  }
  return (Number(used) / Number(total)) * 100
}

function formatDurationBetween(start: string | null | undefined, end?: string | null): string {
  if (!start) {
    return 'Not started'
  }
  const startedAt = new Date(start).getTime()
  const endedAt = end ? new Date(end).getTime() : Date.now()
  if (Number.isNaN(startedAt) || Number.isNaN(endedAt) || endedAt < startedAt) {
    return 'Not available'
  }
  const totalSeconds = Math.floor((endedAt - startedAt) / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  if (hours > 0) {
    return `${hours}h ${minutes}m ${seconds}s`
  }
  if (minutes > 0) {
    return `${minutes}m ${seconds}s`
  }
  return `${seconds}s`
}

function jobLogUrl(jobId: string, lines = 200): string {
  return `/api/v1/jobs/${jobId}/log?lines=${lines}`
}

function fullJobLogUrl(jobId: string): string {
  return `/api/v1/jobs/${jobId}/log?full=true`
}

function sanitizeFilenamePart(value: string): string {
  const sanitized = value.trim().replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/^-+|-+$/g, '')
  return sanitized || 'job'
}

function buildJobLogFilename(job: JobRecord): string {
  const nameParts = [job.project_id || 'controller', job.job_type, job.job_id].map(sanitizeFilenamePart)
  return `${nameParts.join('__')}.log`
}

function lockfileDownloadUrl(projectId: string): string {
  return `/api/v1/projects/${encodeURIComponent(projectId)}/lockfile`
}

function projectExportUrl(projectId: string, mode: 'code_only' | 'code_and_data' | 'full'): string {
  return `/api/v1/projects/${encodeURIComponent(projectId)}/export?mode=${encodeURIComponent(mode)}`
}

function projectExportFilename(projectId: string, mode: 'code_only' | 'code_and_data' | 'full'): string {
  const suffix = mode === 'code_only' ? 'code' : mode === 'code_and_data' ? 'code_and_data' : 'full'
  return `bulletjournal_export_${projectId}_${suffix}.zip`
}

function responseDownloadFilename(response: Response): string | null {
  const contentDisposition = response.headers.get('content-disposition') || ''
  const utf8Match = contentDisposition.match(/filename\*=UTF-8''([^;]+)/i)
  if (utf8Match) {
    try {
      return decodeURIComponent(utf8Match[1])
    } catch {
      return utf8Match[1]
    }
  }
  const quotedMatch = contentDisposition.match(/filename="([^"]+)"/i)
  if (quotedMatch) {
    return quotedMatch[1]
  }
  const plainMatch = contentDisposition.match(/filename=([^;]+)/i)
  return plainMatch ? plainMatch[1].trim() : null
}

function isProjectOpenable(project: Project): boolean {
  return project.status === 'running' && project.runtime.container_port !== null
}

function displayProjectStatus(project: Project): string {
  const label = projectStateLabel(project)
  if (!label) {
    return 'Unknown'
  }
  return label
    .split(/[_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function truncateContainerId(value: string | null | undefined): string {
  if (!value) {
    return 'Not running'
  }
  return value.slice(0, 12)
}

function jobStatusCardClass(job: JobRecord): string {
  if (job.status === 'succeeded') {
    return 'state-succeeded'
  }
  if (job.status === 'running' || job.status === 'queued') {
    return 'state-running'
  }
  if (job.status === 'failed') {
    return 'state-failed'
  }
  return ''
}

function displayJobStatus(job: JobRecord): string {
  return job.status
    .split(/[_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function projectStateLabel(project: Project): string {
  if (project.status === 'error' && project.status_reason) {
    return project.status_reason
  }
  if (project.status === 'stopped' && project.status_reason) {
    return project.status_reason
  }
  return project.status
}

function projectVisualState(project: Project): 'busy' | 'running' | 'error' | 'stopped' {
  if (project.has_active_job || project.status === 'creating' || project.status === 'installing' || project.status === 'starting' || project.status === 'stopping' || project.install_status === 'installing') {
    return 'busy'
  }
  if (project.status === 'running') {
    return 'running'
  }
  if (project.status === 'error' || project.status_reason === 'install_failed' || project.status_reason === 'start_failed' || project.status_reason === 'runtime_crashed') {
    return 'error'
  }
  return 'stopped'
}

function projectCardStateClass(project: Project): string {
  return `state-${projectVisualState(project)}`
}

function projectMetricDetails(project: Project): Array<{ label: string; value: string; tone: '' | 'metric-ok' | 'metric-warning' | 'metric-danger' }> {
  const cpuPercent = typeof project.metrics.cpu_percent === 'number' ? project.metrics.cpu_percent : null
  const memoryPercent = usagePercent(project.metrics.memory_used_bytes ?? null, project.metrics.memory_limit_bytes ?? null)
  const diskPercent = usagePercent(project.metrics.disk_used_bytes ?? null, project.limits.disk_soft_limit_bytes ?? null)

  return [
    {
      label: 'Disk',
      value: formatBytes(project.metrics.disk_used_bytes ?? 0),
      tone: metricTone(diskPercent),
    },
    {
      label: 'RAM',
      value: typeof project.metrics.memory_used_bytes === 'number'
        ? formatBytes(project.metrics.memory_used_bytes)
        : '-',
      tone: metricTone(memoryPercent),
    },
    {
      label: 'CPU',
      value: formatPercentage(cpuPercent),
      tone: metricTone(project.limits.cpu_limit_millis ? cpuPercent : null),
    },
  ]
}

function FooterSystemMetrics({ systemInfo }: { systemInfo: SystemInfo | null }) {
  const cpuTone = metricTone(systemInfo?.metrics.cpu_percent)
  const memoryPercent = usagePercent(systemInfo?.metrics.memory?.used_bytes ?? null, systemInfo?.metrics.memory?.total_bytes ?? null)
  const diskPercent = usagePercent(systemInfo?.metrics.disk?.used_bytes ?? null, systemInfo?.metrics.disk?.total_bytes ?? null)

  return (
    <div className="footer-metrics">
      <span
        className={classNames('footer-metric', metricTone(diskPercent))}
        style={metricFillStyle(diskPercent)}
        title={systemInfo?.metrics.disk ? `${formatBytes(systemInfo.metrics.disk.used_bytes)} / ${formatBytes(systemInfo.metrics.disk.total_bytes)}` : 'Not available'}
      >
        <span className="muted">Disk</span>
        <strong>{formatPercentage(diskPercent)}</strong>
      </span>
      <span
        className={classNames('footer-metric', metricTone(memoryPercent))}
        style={metricFillStyle(memoryPercent)}
        title={systemInfo?.metrics.memory ? `${formatBytes(systemInfo.metrics.memory.used_bytes)} / ${formatBytes(systemInfo.metrics.memory.total_bytes)}` : 'Not available'}
      >
        <span className="muted">RAM</span>
        <strong>{formatPercentage(memoryPercent)}</strong>
      </span>
      <span className={classNames('footer-metric', cpuTone)} style={metricFillStyle(systemInfo?.metrics.cpu_percent)}>
        <span className="muted">CPU</span>
        <strong>{formatPercentage(systemInfo?.metrics.cpu_percent)}</strong>
      </span>
    </div>
  )
}

function projectActionState(project: Project): {
  label: string
  action: 'start' | 'stop' | null
  className: string
  disabled: boolean
} {
  if (project.status === 'running') {
    return { label: 'Stop', action: 'stop', className: 'button-status-stop', disabled: false }
  }
  if (project.status === 'creating') {
    return { label: 'Creating...', action: null, className: 'button-neutral', disabled: true }
  }
  if (project.status === 'installing') {
    return { label: 'Installing...', action: null, className: 'button-neutral', disabled: true }
  }
  if (project.status === 'starting') {
    return { label: 'Starting...', action: null, className: 'button-neutral', disabled: true }
  }
  if (project.status === 'stopping') {
    return { label: 'Stopping...', action: null, className: 'button-neutral', disabled: true }
  }
  return { label: 'Start', action: 'start', className: 'button-status-start', disabled: false }
}

function projectWithOptimisticAction(project: Project, optimisticAction: OptimisticProjectAction | null, activeJobIds: string[]): Project {
  if (!optimisticAction) {
    return project
  }
  if (optimisticAction.jobId && !activeJobIds.includes(optimisticAction.jobId)) {
    return project
  }
  if (optimisticAction.action === 'start' && project.status !== 'stopped' && project.status !== 'error') {
    return project
  }
  if (optimisticAction.action === 'stop' && project.status !== 'running') {
    return project
  }
  return {
    ...project,
    status: optimisticAction.action === 'start' ? 'starting' : 'stopping',
    status_reason: null,
  }
}

function isActiveJobStatus(status: string): boolean {
  return status === 'queued' || status === 'running'
}

function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'AbortError'
}

function useLatestValue<T>(value: T) {
  const ref = useRef(value)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref
}

function trimLogLines(lines: string[], maxLines: number): string[] {
  if (lines.length <= maxLines) {
    return lines
  }
  return lines.slice(lines.length - maxLines)
}

type JobEventMessage = {
  type: 'job.updated' | 'job.log'
  line?: string
}

function JobLogPreview({
  job,
  downloading,
  onDownload,
}: {
  job: JobRecord
  downloading?: boolean
  onDownload?: (job: JobRecord) => void | Promise<void>
}) {
  const [logText, setLogText] = useState('')
  const [scrollbarWidth, setScrollbarWidth] = useState(0)
  const latestJobRef = useLatestValue(job)
  const logRef = useRef<HTMLPreElement | null>(null)
  const maxLines = 160
  const trackedJobIds = isActiveJobStatus(job.status) ? [job.job_id] : []

  const loadLog = useCallback(async (signal: AbortSignal) => {
    try {
      const response = await fetch(jobLogUrl(latestJobRef.current.job_id, maxLines), { credentials: 'include', signal })
      const text = await response.text()
      setLogText(text.trim())
    } catch (nextError) {
      if (!isAbortError(nextError)) {
        setLogText('')
      }
    }
  }, [latestJobRef])

  useEffect(() => {
    const controller = new AbortController()
    void loadLog(controller.signal)
    return () => controller.abort()
  }, [job.job_id, loadLog])

  useJobEvents(trackedJobIds, useCallback((eventJob, event) => {
    if (eventJob.job_id !== job.job_id) {
      return
    }
    if (event?.type === 'job.log') {
      const line = typeof event.line === 'string' ? event.line : ''
      if (!line) {
        return
      }
      setLogText((current) => trimLogLines([...(current ? current.split('\n') : []), line], maxLines).join('\n'))
      return
    }
    if (!isActiveJobStatus(eventJob.status)) {
      const controller = new AbortController()
      void loadLog(controller.signal)
    }
  }, [job.job_id, loadLog]))

  useEffect(() => {
    const logNode = logRef.current
    if (!logNode) {
      return
    }

    const updateScrollbarWidth = () => {
      const nextWidth = logNode.scrollHeight > logNode.clientHeight + 1
        ? Math.max(0, logNode.offsetWidth - logNode.clientWidth)
        : 0
      setScrollbarWidth((current) => current === nextWidth ? current : nextWidth)
    }

    updateScrollbarWidth()

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateScrollbarWidth)
      return () => window.removeEventListener('resize', updateScrollbarWidth)
    }

    const observer = new ResizeObserver(() => {
      updateScrollbarWidth()
    })
    observer.observe(logNode)

    return () => {
      observer.disconnect()
    }
  }, [logText])

  if (!logText) {
    return null
  }

  const previewStyle: CSSProperties & Record<'--job-log-scrollbar-width', string> = {
    '--job-log-scrollbar-width': `${scrollbarWidth}px`,
  }

  return (
    <div className="job-log-preview" style={previewStyle}>
      {onDownload ? (
        <button
          className="job-log-download"
          type="button"
          aria-label={downloading ? 'Downloading log' : 'Download log'}
          title={downloading ? 'Downloading log' : 'Download full log'}
          disabled={!!downloading}
          onClick={() => {
            void onDownload(job)
          }}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2.5v7" />
            <path d="m5.25 7.75 2.75 2.75 2.75-2.75" />
            <path d="M3 13.5h10" />
          </svg>
        </button>
      ) : null}
      <div className="job-log-frame">
        <pre ref={logRef}>{logText}</pre>
      </div>
    </div>
  )
}

function useAppState(): AppState {
  const context = React.useContext(AppContext)
  if (!context) {
    throw new Error('App context is unavailable.')
  }
  return context
}

function usePolling(
  callback: (signal: AbortSignal) => void | Promise<void>,
  delay: number | null,
  deps: React.DependencyList,
  options?: {
    hiddenDelay?: number | null
    errorDelay?: number | null
  },
) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (delay === null) {
      return
    }

    let cancelled = false
    let timeoutId: number | null = null
    let controller: AbortController | null = null
    let inFlight = false
    let rerunWhenVisible = false

    const nextDelay = () => document.hidden ? (options?.hiddenDelay ?? delay) : delay

    const schedule = (ms: number | null | undefined) => {
      if (cancelled || ms === null || ms === undefined) {
        return
      }
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId)
      }
      timeoutId = window.setTimeout(() => {
        timeoutId = null
        void run()
      }, ms)
    }

    const run = async () => {
      if (cancelled || inFlight) {
        return
      }
      inFlight = true
      controller = new AbortController()
      try {
        await callbackRef.current(controller.signal)
        if (!cancelled) {
          schedule(nextDelay())
        }
      } catch (nextError) {
        if (!cancelled && !isAbortError(nextError)) {
          const errorDelay = document.hidden ? (options?.hiddenDelay ?? options?.errorDelay ?? delay) : (options?.errorDelay ?? delay)
          schedule(errorDelay)
        }
      } finally {
        inFlight = false
        controller = null
        if (!cancelled && rerunWhenVisible && !document.hidden) {
          rerunWhenVisible = false
          schedule(0)
        }
      }
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        return
      }
      if (inFlight) {
        rerunWhenVisible = true
        return
      }
      schedule(0)
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    void run()

    return () => {
      cancelled = true
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId)
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      controller?.abort()
    }
  }, deps)
}

function useJobEvents(
  jobIds: string[],
  onJobUpdate: (job: JobRecord, event?: JobEventMessage) => void,
) {
  const onJobUpdateRef = useRef(onJobUpdate)
  const jobIdsKey = useMemo(() => Array.from(new Set(jobIds)).sort().join('\u0000'), [jobIds])

  useEffect(() => {
    onJobUpdateRef.current = onJobUpdate
  }, [onJobUpdate])

  useEffect(() => {
    if (!jobIdsKey) {
      return
    }

    const trackedJobIds = jobIdsKey.split('\u0000')
    const trackedJobIdSet = new Set(trackedJobIds)
    const controller = new AbortController()
    let cancelled = false
    const source = new EventSource('/api/v1/events/jobs')

    const loadTrackedJobs = async () => {
      const responses = await Promise.allSettled(trackedJobIds.map((jobId) => request<JobRecord>(`/api/v1/jobs/${jobId}`, { signal: controller.signal })))
      if (cancelled) {
        return
      }
      for (const result of responses) {
        if (result.status === 'fulfilled') {
          onJobUpdateRef.current(result.value)
        }
      }
    }

    const handleJobLog = (rawEvent: Event) => {
      const event = rawEvent as MessageEvent<string>
      try {
        const payload = JSON.parse(event.data) as { job_id: string; line?: string }
        if (!trackedJobIdSet.has(payload.job_id)) {
          return
        }
        onJobUpdateRef.current({
          job_id: payload.job_id,
          project_id: null,
          job_type: '',
          status: 'running',
          requested_by_user_id: '',
          payload_json: '',
          result_json: null,
          log_path: '',
          created_at: '',
          started_at: null,
          finished_at: null,
          error_message: null,
        }, { type: 'job.log', line: payload.line })
      } catch {
        // Ignore malformed events and wait for the next update.
      }
    }

    const handleJobUpdated = (rawEvent: Event) => {
      const event = rawEvent as MessageEvent<string>
      try {
        const job = JSON.parse(event.data) as JobRecord
        if (trackedJobIdSet.has(job.job_id)) {
          onJobUpdateRef.current(job, { type: 'job.updated' })
        }
      } catch {
        // Ignore malformed events and wait for the next update.
      }
    }

    void loadTrackedJobs()
    source.addEventListener('job.log', handleJobLog)
    source.addEventListener('job.updated', handleJobUpdated)

    return () => {
      cancelled = true
      controller.abort()
      source.removeEventListener('job.log', handleJobLog)
      source.removeEventListener('job.updated', handleJobUpdated)
      source.close()
    }
  }, [jobIdsKey])
}

function AppProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<SessionResponse | null>(null)
  const [sessionLoading, setSessionLoading] = useState(true)
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const stored = window.localStorage.getItem('bulletjournal-controller-theme')
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored
    }
    return 'system'
  })

  const refreshSession = useCallback(async () => {
    try {
      const next = await request<SessionResponse>('/api/v1/session/current', { method: 'GET' })
      setSession(next)
    } catch {
      setSession({ authenticated: false, user: null })
    } finally {
      setSessionLoading(false)
    }
  }, [])

  const signOut = useCallback(async () => {
    await request<SessionResponse>('/api/v1/session/logout', { method: 'POST' })
    setSession({ authenticated: false, user: null })
  }, [])

  useEffect(() => {
    void refreshSession()
  }, [refreshSession])

  useEffect(() => {
    const root = document.documentElement
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    function applyTheme() {
      const resolved = themeMode === 'system' ? (media.matches ? 'dark' : 'light') : themeMode
      root.dataset.theme = resolved
      root.style.colorScheme = resolved
    }

    applyTheme()
    window.localStorage.setItem('bulletjournal-controller-theme', themeMode)
    media.addEventListener('change', applyTheme)
    return () => media.removeEventListener('change', applyTheme)
  }, [themeMode])

  const value = useMemo(() => ({ session, sessionLoading, refreshSession, signOut, themeMode, setThemeMode }), [refreshSession, session, sessionLoading, signOut, themeMode])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

function AuthGate({ children }: { children: React.ReactNode }) {
  const { session, sessionLoading } = useAppState()
  const location = useLocation()

  if (sessionLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-card">
          <h2>Preparing your controller workspace</h2>
          <p className="section-copy">Checking authentication and restoring the current controller session.</p>
        </div>
      </div>
    )
  }

  if (!session?.authenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return <>{children}</>
}

function LoginPage() {
  const { session, refreshSession } = useAppState()
  const navigate = useNavigate()
  const location = useLocation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (session?.authenticated) {
      navigate('/', { replace: true })
    }
  }, [navigate, session])

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      await request<SessionResponse>('/api/v1/session/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      })
      await refreshSession()
      const nextPath = typeof location.state === 'object' && location.state && 'from' in location.state ? String((location.state as { from?: unknown }).from || '/') : '/'
      navigate(nextPath || '/', { replace: true })
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : 'Login failed.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="login-shell">
      <section className="login-panel">
        <h1>BulletJournal login</h1>
        <hr className="login-divider" />
        <form className="layout-grid" onSubmit={onSubmit}>
          <div className="field-full">
            <label htmlFor="username">Username</label>
            <input id="username" value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" required />
          </div>
          <div className="field-full">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required />
          </div>
          {error ? <div className="error-banner">{error}</div> : null}
          <div className="button-row">
            <button className="button" type="submit" disabled={submitting}>{submitting ? 'Signing in...' : 'Login'}</button>
          </div>
        </form>
      </section>
    </div>
  )
}

function ThemeSwitcher() {
  const { session, signOut, themeMode, setThemeMode } = useAppState()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      return
    }
    function onWindowClick() {
      setOpen(false)
    }
    window.addEventListener('click', onWindowClick)
    return () => window.removeEventListener('click', onWindowClick)
  }, [open])

  return (
    <div className="footer-theme">
      <button
        className="theme-trigger"
        type="button"
        aria-label="Switch theme"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={(event) => {
          event.stopPropagation()
          setOpen((current) => !current)
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="18" height="18">
          <path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-.9-.5-1.3-.3-.3-.5-.7-.5-1.2 0-1.1.9-2 2-2h1a5 5 0 0 0 0-10Z"></path>
          <path d="M7.5 10.5h.01"></path>
          <path d="M9.5 7.5h.01"></path>
          <path d="M14.5 7.5h.01"></path>
          <path d="M16.5 10.5h.01"></path>
        </svg>
      </button>
      {open ? (
        <div className="theme-popover" role="menu" onClick={(event) => event.stopPropagation()}>
          {(['light', 'dark', 'system'] as const).map((mode) => (
            <button
              key={mode}
              className={classNames('theme-option', themeMode === mode && 'active')}
              type="button"
              role="menuitemradio"
              aria-checked={themeMode === mode}
              onClick={() => {
                setThemeMode(mode)
                setOpen(false)
              }}
            >
              {mode === 'light' ? 'Light' : mode === 'dark' ? 'Dark' : 'System'}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function AppChrome({ children, footerMetrics = null }: { children: React.ReactNode; footerMetrics?: React.ReactNode }) {
  const { session, signOut } = useAppState()
  const navigate = useNavigate()

  return (
    <div className="app-shell">
      {children}
      <footer className="app-footer">
        <div className="footer-left">
          <div className="footer-session">
            <span className="muted">Signed in as</span>
            <strong>{session?.user?.display_name || session?.user?.username || 'Unknown user'}</strong>
            <span className="muted">({session?.user?.username || 'unknown'})</span>
          </div>
          <button
            className="logout-link"
            type="button"
            onClick={async () => {
              await signOut()
              navigate('/login', { replace: true })
            }}
          >
            Logout
          </button>
        </div>
        <div className="footer-right">
          {footerMetrics}
          <ThemeSwitcher />
        </div>
      </footer>
    </div>
  )
}

function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [actionError, setActionError] = useState<string | null>(null)
  const [activeJobIds, setActiveJobIds] = useState<string[]>([])
  const [optimisticActions, setOptimisticActions] = useState<Record<string, OptimisticProjectAction>>({})
  const [pendingDeletions, setPendingDeletions] = useState<Record<string, string>>({})
  const [hiddenProjectIds, setHiddenProjectIds] = useState<string[]>([])
  const [showCreateModal, setShowCreateModal] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const pendingDeletionsRef = useLatestValue(pendingDeletions)

  const fetchDashboard = useCallback(async (signal?: AbortSignal) => {
    try {
      const [nextProjects, nextSystemInfo] = await Promise.all([
        request<Project[]>('/api/v1/projects', { signal }),
        request<SystemInfo>('/api/v1/system/info', { signal }),
      ])
      setProjects(nextProjects)
      setSystemInfo(nextSystemInfo)
      setHiddenProjectIds((current) => current.filter((projectId) => nextProjects.some((project) => project.project_id === projectId)))
      setError(null)
    } catch (nextError) {
      if (!isAbortError(nextError)) {
        setError(nextError instanceof Error ? nextError.message : 'Failed to load dashboard.')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  usePolling((signal) => fetchDashboard(signal), activeJobIds.length > 0 ? 5000 : 15000, [activeJobIds.length, fetchDashboard], { hiddenDelay: 60000, errorDelay: 15000 })

  useEffect(() => {
    if (!location.state || typeof location.state !== 'object') {
      return
    }
    const state = location.state as { deletedProjectId?: unknown; deleteJobId?: unknown }
    const deletedProjectId = typeof state.deletedProjectId === 'string' ? state.deletedProjectId : null
    const deleteJobId = typeof state.deleteJobId === 'string' ? state.deleteJobId : null
    if (!deletedProjectId || !deleteJobId) {
      return
    }
    setHiddenProjectIds((current) => Array.from(new Set([...current, deletedProjectId])))
    setPendingDeletions((current) => ({ ...current, [deleteJobId]: deletedProjectId }))
    setActiveJobIds((current) => Array.from(new Set([...current, deleteJobId])))
    void fetchDashboard()
    navigate(location.pathname, { replace: true, state: null })
  }, [fetchDashboard, location.pathname, location.state, navigate])

  const handleTrackedJobUpdate = useCallback((job: JobRecord) => {
    if (isActiveJobStatus(job.status)) {
      setActiveJobIds((current) => current.includes(job.job_id) ? current : [...current, job.job_id])
      return
    }

    setActiveJobIds((current) => current.filter((jobId) => jobId !== job.job_id))
    const deletedProjectId = pendingDeletionsRef.current[job.job_id]
    if (deletedProjectId) {
      setPendingDeletions((current) => {
        const next = { ...current }
        delete next[job.job_id]
        return next
      })
      if (job.status !== 'succeeded') {
        setHiddenProjectIds((current) => current.filter((projectId) => projectId !== deletedProjectId))
        setActionError(job.error_message || `Failed to delete project ${deletedProjectId}.`)
      }
    }
    void fetchDashboard()
  }, [fetchDashboard])

  useJobEvents(activeJobIds, handleTrackedJobUpdate)

  useEffect(() => {
    setOptimisticActions((current) => {
      const nextEntries = Object.entries(current).filter(([, value]) => !value.jobId || activeJobIds.includes(value.jobId))
      if (nextEntries.length === Object.keys(current).length) {
        return current
      }
      return Object.fromEntries(nextEntries)
    })
  }, [activeJobIds])

  const visibleProjects = useMemo(() => projects
    .filter((project) => !hiddenProjectIds.includes(project.project_id))
    .map((project) => projectWithOptimisticAction(project, optimisticActions[project.project_id] || null, activeJobIds)), [activeJobIds, hiddenProjectIds, optimisticActions, projects])

  const groupedProjects = useMemo(() => {
    const groups: Record<'Running' | 'Stopped' | 'Error', Project[]> = {
      Running: [],
      Stopped: [],
      Error: [],
    }
    for (const project of visibleProjects) {
      if (project.status === 'running' || project.status === 'starting' || project.status === 'stopping') {
        groups.Running.push(project)
      } else if (project.status === 'error') {
        groups.Error.push(project)
      } else {
        groups.Stopped.push(project)
      }
    }
    return groups
  }, [visibleProjects])

  async function queueProjectAction(projectId: string, action: 'start' | 'stop') {
    setOptimisticActions((current) => ({ ...current, [projectId]: { action } }))
    try {
      setActionError(null)
      const response = await request<ProjectActionJobResponse>(`/api/v1/projects/${projectId}/${action}`, {
        method: 'POST',
      })
      if (response.job) {
        setOptimisticActions((current) => ({ ...current, [projectId]: { action, jobId: response.job!.job_id } }))
        setActiveJobIds((current) => Array.from(new Set([...current, response.job!.job_id])))
      } else {
        setOptimisticActions((current) => {
          const next = { ...current }
          delete next[projectId]
          return next
        })
      }
      if (response.already_running) {
        setOptimisticActions((current) => {
          const next = { ...current }
          delete next[projectId]
          return next
        })
        setActionError('Project is already running.')
      }
      if (response.already_stopped) {
        setOptimisticActions((current) => {
          const next = { ...current }
          delete next[projectId]
          return next
        })
        setActionError('Project is already stopped.')
      }
      await fetchDashboard()
    } catch (nextError) {
      setOptimisticActions((current) => {
        const next = { ...current }
        delete next[projectId]
        return next
      })
      setActionError(nextError instanceof Error ? nextError.message : `Failed to ${action} project.`)
    }
  }

  return (
    <AppChrome footerMetrics={<FooterSystemMetrics systemInfo={systemInfo} />}>
      {error ? <div className="error-banner">{error}</div> : null}
      {actionError ? <div className="error-banner">{actionError}</div> : null}

      <div className="dashboard-grid">
        <section className="panel">
          <div className="panel-head">
            <div className="panel-head-row">
              <div>
                <h2>BulletJournal projects</h2>
                {activeJobIds.length > 0 ? <span className="muted">Watching {activeJobIds.length} active job{activeJobIds.length === 1 ? '' : 's'}</span> : null}
              </div>
              <button className="button" type="button" onClick={() => setShowCreateModal(true)}>
                <PlusIcon width={22} height={22} />
                <span>New project</span>
              </button>
            </div>
          </div>
          <div className="panel-body">
            {loading ? <div className="empty-state">Loading projects...</div> : null}
            <div className="group-list">
              {(['Running', 'Stopped', 'Error'] as const).map((groupName) => {
                const group = groupedProjects[groupName]
                return (
                  <section key={groupName}>
                    <div className="group-header">
                      <div className="group-header-title">
                        <h3>{groupName}</h3>
                        <div className="group-header-divider" aria-hidden="true" />
                      </div>
                      <span className="muted">{group.length} project{group.length === 1 ? '' : 's'}</span>
                    </div>
                    {group.length === 0 ? (
                      <div className="empty-state">No projects currently in this group.</div>
                    ) : (
                      <div className="project-cards">
                        {group.map((project) => {
                          const actionState = projectActionState(project)
                          const metrics = projectMetricDetails(project)
                          const actionUsesIcon = actionState.label === 'Start' || actionState.label === 'Stop' || actionState.label === 'Starting...' || actionState.label === 'Stopping...'
                          return (
                            <article className={classNames('project-card', projectCardStateClass(project))} key={project.project_id}>
                              <div className="project-card-header">
                                <div className="project-card-top">
                                  <h4>{project.project_id}</h4>
                                  <hr className="project-card-divider" />
                                </div>
                              </div>
                              <div className="meta-grid">
                                <div className="metrics-row">
                                  {metrics.map((metric) => (
                                    <div key={metric.label} className={classNames('meta-item', 'metric-chip', metric.tone)}>
                                      <span>{metric.label}</span>
                                      <strong>{metric.value}</strong>
                                    </div>
                                  ))}
                                </div>
                                <div className="meta-item">
                                  <span>Last edit</span>
                                  {project.last_edit_at ? (
                                    <div className="timestamp-row">
                                      <strong>{formatRelativeTime(project.last_edit_at)}</strong>
                                      <span className="muted">{formatDateTime(project.last_edit_at)}</span>
                                    </div>
                                  ) : (
                                    <strong>-</strong>
                                  )}
                                </div>
                              </div>
                              <div className="quick-actions">
                                {isProjectOpenable(project) ? (
                                  <a className="button-open icon-action" href={`/p/${project.project_id}/`} target="_blank" rel="noreferrer" aria-label="Open project" title="Open project">
                                    <PencilIcon width={18} height={18} />
                                  </a>
                                ) : null}
                                <button
                                  className={classNames(actionState.className, actionUsesIcon && 'icon-action')}
                                  type="button"
                                  disabled={actionState.disabled}
                                  aria-label={actionState.label}
                                  title={actionState.label}
                                  onClick={() => {
                                    if (actionState.action) {
                                      void queueProjectAction(project.project_id, actionState.action)
                                    }
                                  }}
                                >
                                  {actionUsesIcon ? (
                                    <>
                                      {actionState.action === 'start' || actionState.label === 'Starting...' ? <PlayIcon width={18} height={18} /> : null}
                                      {actionState.action === 'stop' || actionState.label === 'Stopping...' ? <StopIcon width={18} height={18} /> : null}
                                    </>
                                  ) : actionState.label}
                                </button>
                                <button className="button-secondary icon-action" type="button" aria-label="Project details" title="Project details" onClick={() => navigate(`/projects/${project.project_id}`)}>
                                  <span className="info-glyph" aria-hidden="true">i</span>
                                </button>
                              </div>
                            </article>
                          )
                        })}
                      </div>
                    )}
                  </section>
                )
              })}
            </div>
          </div>
        </section>
      </div>

      {showCreateModal && systemInfo ? (
        <CreateProjectModal
          systemInfo={systemInfo}
          onClose={() => setShowCreateModal(false)}
        />
      ) : null}
    </AppChrome>
  )
}

function CreateProjectModal({
  systemInfo,
  onClose,
}: {
  systemInfo: SystemInfo
  onClose: () => void
}) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    project_id: '',
    custom_requirements_text: systemInfo.default_dependencies_text,
    cpu_limit_input: '',
    memory_limit_input: '',
    disk_soft_limit_input: '',
    gpu_enabled: true,
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showLimitsForm, setShowLimitsForm] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const response = await request<{ project: { project_id: string }; job: { job_id: string } }>('/api/v1/projects', {
        method: 'POST',
        body: JSON.stringify({
          project_id: form.project_id,
          custom_requirements_text: form.custom_requirements_text,
          cpu_limit_millis: parseCpuInputToMillis(form.cpu_limit_input),
          memory_limit_bytes: parseMemoryInputToBytes(form.memory_limit_input),
          disk_soft_limit_bytes: parseDiskInputToBytes(form.disk_soft_limit_input),
          gpu_enabled: form.gpu_enabled,
        }),
      })
      navigate(`/projects/${response.project.project_id}`, {
        state: {
          createdProjectId: response.project.project_id,
          createJobId: response.job.job_id,
        },
      })
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : 'Failed to create project.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={() => {
      if (!submitting) {
        onClose()
      }
    }}>
      <section className="modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
        <div className="modal-head">
          <div>
            <h2>Provision a managed BulletJournal runtime</h2>
            <p className="section-copy">Project ids become both filesystem roots and runtime identifiers. Creation installs dependencies and starts the container in the background after the project record is created.</p>
          </div>
          <button className="close-button" type="button" onClick={onClose} aria-label="Close dialog" disabled={submitting}>×</button>
        </div>
        <div className="modal-body">
          <form className="layout-grid" onSubmit={onSubmit}>
            <div className="field-grid">
              <div className="field">
                <label htmlFor="create-project-id">Project id</label>
                <input id="create-project-id" value={form.project_id} onChange={(event) => setForm((current) => ({ ...current, project_id: event.target.value }))} placeholder="study-a" required />
              </div>
              <div className="field-full">
                <label htmlFor="create-dependencies">Dependency text</label>
                <textarea id="create-dependencies" value={form.custom_requirements_text} onChange={(event) => setForm((current) => ({ ...current, custom_requirements_text: event.target.value }))} />
                <span className="muted">The dependency text starts from the controller defaults. Edit the BulletJournal line there if you want a different package source or pinned version.</span>
              </div>
              <div className="field-full collapsible-panel">
                <button className="button-secondary section-toggle" type="button" onClick={() => setShowLimitsForm((current) => !current)}>
                  <span className="status-stack">
                    <strong>Runtime limits</strong>
                    <span className="muted">CPU {formatCpuLimit(parseCpuInputToMillis(form.cpu_limit_input))} · Memory {formatMemoryLimit(parseMemoryInputToBytes(form.memory_limit_input))} · Disk {formatDiskSoftLimit(parseDiskInputToBytes(form.disk_soft_limit_input))} · GPU {form.gpu_enabled ? 'On' : 'Off'}</span>
                  </span>
                  <span>{showLimitsForm ? 'Hide' : 'Edit'}</span>
                </button>
                {showLimitsForm ? (
                  <div className="field-grid">
                    <div className="field">
                      <label htmlFor="create-cpu">CPU limit (CPUs)</label>
                      <input id="create-cpu" type="number" min={0} step="0.1" value={form.cpu_limit_input} onChange={(event) => setForm((current) => ({ ...current, cpu_limit_input: event.target.value }))} placeholder="Unlimited" />
                      <span className="muted">Leave blank for no CPU limit.</span>
                    </div>
                    <div className="field">
                      <label htmlFor="create-memory">Memory limit (GB)</label>
                      <input id="create-memory" type="number" min={0} step="0.1" value={form.memory_limit_input} onChange={(event) => setForm((current) => ({ ...current, memory_limit_input: event.target.value }))} placeholder="Unlimited" />
                      <span className="muted">Leave blank for no memory limit.</span>
                    </div>
                    <div className="field">
                      <label htmlFor="create-disk">Disk soft limit (GB)</label>
                      <input id="create-disk" type="number" min={0} step="0.1" value={form.disk_soft_limit_input} onChange={(event) => setForm((current) => ({ ...current, disk_soft_limit_input: event.target.value }))} placeholder="Unlimited" />
                      <span className="muted">Used for UI warnings only. It does not enforce a real container disk cap.</span>
                    </div>
                    <div className="field-full">
                      <label>GPU access</label>
                      <div className="checkbox-row">
                        <input id="create-gpu" type="checkbox" checked={form.gpu_enabled} onChange={(event) => setForm((current) => ({ ...current, gpu_enabled: event.target.checked }))} />
                        <label htmlFor="create-gpu">Enable GPU if supported on the host</label>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            {error ? <div className="error-banner">{error}</div> : null}
            <div className="button-row">
              <button className="button" type="submit" disabled={submitting}>{submitting ? 'Queueing...' : 'Create Project'}</button>
              <button className="button-secondary" type="button" onClick={onClose} disabled={submitting}>Cancel</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

function ProjectPage() {
  const defaultVisibleJobCount = 5
  const { projectId = '' } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const exportMenuRef = useRef<HTMLDivElement | null>(null)
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeJobIds, setActiveJobIds] = useState<string[]>([])
  const [optimisticAction, setOptimisticAction] = useState<OptimisticProjectAction | null>(null)
  const [environmentForm, setEnvironmentForm] = useState({
    custom_requirements_text: '',
    mark_all_artifacts_stale: true,
    restart_if_running: true,
  })
  const [limitsForm, setLimitsForm] = useState({
    cpu_limit_input: '',
    memory_limit_input: '',
    disk_soft_limit_input: '',
    gpu_enabled: false,
  })
  const [savingEnvironment, setSavingEnvironment] = useState(false)
  const [savingLimits, setSavingLimits] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [exportMenuOpen, setExportMenuOpen] = useState(false)
  const [downloadingExportMode, setDownloadingExportMode] = useState<'code_only' | 'code_and_data' | 'full' | null>(null)
  const [downloadingJobIds, setDownloadingJobIds] = useState<string[]>([])
  const [showAllJobs, setShowAllJobs] = useState(false)
  const [environmentSyncPending, setEnvironmentSyncPending] = useState(false)
  const [limitsDirty, setLimitsDirty] = useState(false)
  const [environmentActionFeedback, setEnvironmentActionFeedback] = useState<{ tone: 'success', message: string } | null>(null)
  const [limitsActionFeedback, setLimitsActionFeedback] = useState<{ tone: 'success', message: string } | null>(null)
  const environmentInputsDirty = !!project && environmentForm.custom_requirements_text !== project.custom_requirements_text
  const projectIdRef = useLatestValue(projectId)
  const environmentInputsDirtyRef = useLatestValue(environmentInputsDirty)
  const environmentSyncPendingRef = useLatestValue(environmentSyncPending)
  const limitsDirtyRef = useLatestValue(limitsDirty)

  const fetchProject = useCallback(async (signal?: AbortSignal) => {
    try {
      const nextProject = await request<Project>(`/api/v1/projects/${projectIdRef.current}`, { signal })
      setProject(nextProject)
      if (!environmentInputsDirtyRef.current && !environmentSyncPendingRef.current) {
        setEnvironmentForm((current) => ({
          custom_requirements_text: nextProject.custom_requirements_text,
          mark_all_artifacts_stale: current.mark_all_artifacts_stale,
          restart_if_running: current.restart_if_running,
        }))
      }
      if (!limitsDirtyRef.current) {
        setLimitsForm({
          cpu_limit_input: formatCpuInputValue(nextProject.limits.cpu_limit_millis),
          memory_limit_input: formatMemoryInputValue(nextProject.limits.memory_limit_bytes),
          disk_soft_limit_input: formatDiskInputValue(nextProject.limits.disk_soft_limit_bytes),
          gpu_enabled: nextProject.limits.gpu_enabled,
        })
      }
      setError(null)
    } catch (nextError) {
      if (!isAbortError(nextError)) {
        setError(nextError instanceof Error ? nextError.message : 'Failed to load project.')
      }
    } finally {
      setLoading(false)
    }
  }, [environmentInputsDirtyRef, environmentSyncPendingRef, limitsDirtyRef, projectIdRef])

  usePolling((signal) => fetchProject(signal), environmentInputsDirty || environmentSyncPending || limitsDirty ? null : (activeJobIds.length > 0 ? 5000 : 15000), [activeJobIds.length, environmentInputsDirty, environmentSyncPending, fetchProject, limitsDirty], { hiddenDelay: 60000, errorDelay: 15000 })

  useEffect(() => {
    setShowAllJobs(false)
  }, [projectId])

  useEffect(() => {
    if (!location.state || typeof location.state !== 'object') {
      return
    }

    const state = location.state as { createdProjectId?: unknown; createJobId?: unknown }
    const createdProjectId = typeof state.createdProjectId === 'string' ? state.createdProjectId : null
    const createJobId = typeof state.createJobId === 'string' ? state.createJobId : null
    if (createdProjectId !== projectId || !createJobId) {
      return
    }

    setActiveJobIds((current) => Array.from(new Set([...current, createJobId])))
    navigate(location.pathname, { replace: true, state: null })
  }, [location.pathname, location.state, navigate, projectId])

  useEffect(() => {
    if (!optimisticAction?.jobId || activeJobIds.includes(optimisticAction.jobId)) {
      return
    }
    setOptimisticAction(null)
  }, [activeJobIds, optimisticAction])

  useEffect(() => {
    if (environmentActionFeedback?.tone !== 'success') {
      return
    }
    const id = window.setTimeout(() => {
      setEnvironmentActionFeedback((current) => current?.tone === 'success' ? null : current)
    }, 3500)
    return () => window.clearTimeout(id)
  }, [environmentActionFeedback])

  useEffect(() => {
    if (limitsActionFeedback?.tone !== 'success') {
      return
    }
    const id = window.setTimeout(() => {
      setLimitsActionFeedback((current) => current?.tone === 'success' ? null : current)
    }, 3500)
    return () => window.clearTimeout(id)
  }, [limitsActionFeedback])

  useEffect(() => {
    if (!exportMenuOpen) {
      return
    }
    function onWindowClick(event: MouseEvent) {
      if (exportMenuRef.current?.contains(event.target as Node)) {
        return
      }
      setExportMenuOpen(false)
    }
    window.addEventListener('click', onWindowClick)
    return () => window.removeEventListener('click', onWindowClick)
  }, [exportMenuOpen])

  const handleTrackedJobUpdate = useCallback((job: JobRecord) => {
    if (isActiveJobStatus(job.status)) {
      setActiveJobIds((current) => current.includes(job.job_id) ? current : [...current, job.job_id])
      return
    }
    setActiveJobIds((current) => current.filter((jobId) => jobId !== job.job_id))
    setEnvironmentSyncPending(false)
    void fetchProject()
  }, [fetchProject])

  useJobEvents(activeJobIds, handleTrackedJobUpdate)

  async function queueAction(action: 'start' | 'stop') {
    setOptimisticAction({ action })
    try {
      const response = await request<ProjectActionJobResponse>(`/api/v1/projects/${projectId}/${action}`, {
        method: 'POST',
      })
      if (response.job) {
        setOptimisticAction({ action, jobId: response.job.job_id })
        setActiveJobIds((current) => Array.from(new Set([...current, response.job!.job_id])))
      } else if (response.already_running) {
        setOptimisticAction(null)
        setError('Project is already running.')
      } else if (response.already_stopped) {
        setOptimisticAction(null)
        setError('Project is already stopped.')
      } else {
        setOptimisticAction(null)
      }
      await fetchProject()
    } catch (nextError) {
      setOptimisticAction(null)
      setError(nextError instanceof Error ? nextError.message : `Failed to ${action}.`)
    }
  }

  async function onSaveEnvironment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSavingEnvironment(true)
    setError(null)
    const shouldSaveAndReinstall = environmentInputsDirty
    try {
      const response = await request<ProjectActionJobResponse>(`/api/v1/projects/${projectId}/${shouldSaveAndReinstall ? 'update-environment' : 'reinstall-environment'}`, {
        method: 'POST',
        body: JSON.stringify(shouldSaveAndReinstall ? environmentForm : {
          restart_if_running: environmentForm.restart_if_running,
          mark_all_artifacts_stale: environmentForm.mark_all_artifacts_stale,
        }),
      })
      if (!response.job) {
        throw new Error('Environment action did not return a queued job.')
      }
      const job = response.job
      setActiveJobIds((current) => Array.from(new Set([...current, job.job_id])))
      if (shouldSaveAndReinstall) {
        setEnvironmentSyncPending(true)
      }
      setEnvironmentActionFeedback({ tone: 'success', message: 'Saved' })
    } catch (nextError) {
      setEnvironmentActionFeedback(null)
      setError(nextError instanceof Error ? nextError.message : 'Failed to queue environment action.')
    } finally {
      setSavingEnvironment(false)
    }
  }

  async function onSaveLimits(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSavingLimits(true)
    setError(null)
    try {
      const nextProject = await request<Project>(`/api/v1/projects/${projectId}/limits`, {
        method: 'POST',
        body: JSON.stringify({
          cpu_limit_millis: parseCpuInputToMillis(limitsForm.cpu_limit_input),
          memory_limit_bytes: parseMemoryInputToBytes(limitsForm.memory_limit_input),
          disk_soft_limit_bytes: parseDiskInputToBytes(limitsForm.disk_soft_limit_input),
          gpu_enabled: limitsForm.gpu_enabled,
        }),
      })
      setProject(nextProject)
      setLimitsForm({
        cpu_limit_input: formatCpuInputValue(nextProject.limits.cpu_limit_millis),
        memory_limit_input: formatMemoryInputValue(nextProject.limits.memory_limit_bytes),
        disk_soft_limit_input: formatDiskInputValue(nextProject.limits.disk_soft_limit_bytes),
        gpu_enabled: nextProject.limits.gpu_enabled,
      })
      setLimitsDirty(false)
      setLimitsActionFeedback({ tone: 'success', message: 'Saved' })
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : 'Failed to update limits.')
    } finally {
      setSavingLimits(false)
    }
  }

  async function onDeleteProject() {
    if (!window.confirm(`Delete project ${projectId}? This removes controller metadata and the project root from disk.`)) {
      return
    }
    setDeleting(true)
    try {
      const response = await request<ProjectActionJobResponse>(`/api/v1/projects/${projectId}`, { method: 'DELETE' })
      if (response.job) {
        setActiveJobIds((current) => Array.from(new Set([...current, response.job!.job_id])))
      }
      navigate('/', { replace: true, state: response.job ? { deletedProjectId: projectId, deleteJobId: response.job.job_id } : null })
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : 'Failed to delete project.')
    } finally {
      setDeleting(false)
    }
  }

  async function downloadJobLog(job: JobRecord) {
    setDownloadingJobIds((current) => current.includes(job.job_id) ? current : [...current, job.job_id])
    try {
      const response = await fetch(fullJobLogUrl(job.job_id), { credentials: 'include' })
      if (!response.ok) {
        throw new Error(`Failed to download log (${response.status}).`)
      }
      const text = await response.text()
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
      const objectUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = objectUrl
      link.download = buildJobLogFilename(job)
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(objectUrl)
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : 'Failed to download job log.')
    } finally {
      setDownloadingJobIds((current) => current.filter((jobId) => jobId !== job.job_id))
    }
  }

  async function downloadLockfile() {
    setError(null)
    try {
      const response = await fetch(lockfileDownloadUrl(projectId), { credentials: 'include' })
      if (!response.ok) {
        const contentType = response.headers.get('content-type') || ''
        const payload = contentType.includes('application/json') ? await response.json() : await response.text()
        const detail = typeof payload === 'object' && payload !== null && 'detail' in payload ? String((payload as { detail: unknown }).detail) : response.statusText
        throw new Error(detail || 'Failed to download lockfile.')
      }
      const blob = await response.blob()
      const objectUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = objectUrl
      link.download = `${projectId}__uv.lock`
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(objectUrl)
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : 'Failed to download lockfile.')
    }
  }

  async function downloadProjectExport(mode: 'code_only' | 'code_and_data' | 'full') {
    setError(null)
    setDownloadingExportMode(mode)
    try {
      const response = await fetch(projectExportUrl(projectId, mode), { credentials: 'include' })
      if (!response.ok) {
        const contentType = response.headers.get('content-type') || ''
        const payload = contentType.includes('application/json') ? await response.json() : await response.text()
        const detail = typeof payload === 'object' && payload !== null && 'detail' in payload ? String((payload as { detail: unknown }).detail) : response.statusText
        throw new Error(detail || 'Failed to export project.')
      }
      const blob = await response.blob()
      const objectUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = objectUrl
      link.download = responseDownloadFilename(response) || projectExportFilename(projectId, mode)
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(objectUrl)
      setExportMenuOpen(false)
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : 'Failed to export project.')
    } finally {
      setDownloadingExportMode(null)
    }
  }

  if (loading) {
    return (
      <AppChrome>
        <div className="empty-state">Loading project details...</div>
      </AppChrome>
    )
  }

  if (!project) {
    return (
      <AppChrome>
        <div className="error-banner">{error || 'Project was not found.'}</div>
      </AppChrome>
    )
  }

  const displayProject = projectWithOptimisticAction(project, optimisticAction, activeJobIds)
  const actionState = projectActionState(displayProject)
  const environmentActionLabel = environmentInputsDirty ? 'Save and reinstall' : 'Reinstall environment'
  const environmentActionPendingLabel = environmentInputsDirty ? 'Saving and reinstalling...' : 'Queueing reinstall...'
  const metrics = projectMetricDetails(displayProject)
  const actionUsesIcon = actionState.label === 'Start' || actionState.label === 'Stop' || actionState.label === 'Starting...' || actionState.label === 'Stopping...'
  const runtimeTimestampLabel = displayProject.status === 'running' || displayProject.status === 'starting'
    ? 'Started at'
    : 'Stopped at'
  const runtimeTimestampValue = displayProject.status === 'running' || displayProject.status === 'starting'
    ? displayProject.runtime.runtime_started_at
    : displayProject.runtime.runtime_stopped_at
  const limitsLocked = displayProject.status === 'running' || displayProject.status === 'starting' || displayProject.status === 'stopping'
  const environmentButtonLabel = environmentActionFeedback?.tone === 'success'
    ? 'Saved'
    : savingEnvironment
      ? environmentActionPendingLabel
      : environmentActionLabel
  const limitsButtonLabel = limitsActionFeedback?.tone === 'success'
    ? 'Saved'
    : savingLimits
      ? 'Saving...'
      : 'Save limits'
  const recentJobs = displayProject.recent_jobs || []
  const visibleJobs = showAllJobs ? recentJobs : recentJobs.slice(0, defaultVisibleJobCount)
  const hasHiddenJobs = recentJobs.length > defaultVisibleJobCount && !showAllJobs

  return (
    <AppChrome>
      <div className="topbar">
        <div className="nav-pills">
          <Link className="pill-link button-back" to="/" aria-label="Back to dashboard" title="Back to dashboard">
            <ArrowLeftIcon width={18} height={18} />
          </Link>
          {activeJobIds.length > 0 ? <span className="badge">Watching {activeJobIds.length} active job{activeJobIds.length === 1 ? '' : 's'}</span> : null}
        </div>
      </div>

      {error ? <div className="error-banner">{error}</div> : null}

      <div className="project-detail-stack">
        <section className={classNames('project-detail-card', projectCardStateClass(displayProject))}>
          <div className="project-detail-header">
            <div className="project-detail-title">
              <h2>{displayProject.project_id}</h2>
            </div>
            <div className="project-detail-status">
              <strong>{displayProjectStatus(displayProject)}</strong>
            </div>
          </div>
          <div className="quick-actions">
            {isProjectOpenable(displayProject) ? (
              <a className="button-open icon-action" href={`/p/${displayProject.project_id}/`} target="_blank" rel="noreferrer" aria-label="Open project" title="Open project">
                <PencilIcon width={18} height={18} />
              </a>
            ) : null}
            <button
              className={classNames(actionState.className, actionUsesIcon && 'icon-action')}
              type="button"
              disabled={actionState.disabled}
              aria-label={actionState.label}
              title={actionState.label}
              onClick={() => {
                if (actionState.action) {
                  void queueAction(actionState.action)
                }
              }}
            >
              {actionUsesIcon ? (
                <>
                  {actionState.action === 'start' || actionState.label === 'Starting...' ? <PlayIcon width={18} height={18} /> : null}
                  {actionState.action === 'stop' || actionState.label === 'Stopping...' ? <StopIcon width={18} height={18} /> : null}
                </>
              ) : actionState.label}
            </button>
          </div>
          <div className="metrics-row">
            {metrics.map((metric) => (
              <div key={metric.label} className={classNames('meta-item', 'metric-chip', metric.tone)}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
          <div className="summary-grid">
            <div className="summary-block compact">
              <h3>Last edit</h3>
              {displayProject.last_edit_at ? (
                <div className="timestamp-row">
                  <strong>{formatRelativeTime(displayProject.last_edit_at)}</strong>
                  <span className="muted">{formatDateTime(displayProject.last_edit_at)}</span>
                </div>
              ) : (
                <strong>-</strong>
              )}
            </div>
            <div className="summary-block compact">
              <h3>Last run</h3>
              {displayProject.last_run_finished_at ? (
                <div className="timestamp-row">
                  <strong>{formatRelativeTime(displayProject.last_run_finished_at)}</strong>
                  <span className="muted">{formatDateTime(displayProject.last_run_finished_at)}</span>
                </div>
              ) : (
                <strong>-</strong>
              )}
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panel-head">
            <h2>Project environment</h2>
          </div>
          <div className="panel-body">
            <form className="project-env-grid" onSubmit={onSaveEnvironment}>
              <div className="environment-overview-card">
                <div className="summary-grid">
                  <div className="summary-block compact">
                    <span className="detail-label">Python version</span>
                    <div className="detail-value mono-copy">{displayProject.python_version}</div>
                  </div>
                  <div className="summary-block compact">
                    <div className="lockfile-row compact">
                      <div className="lockfile-meta">
                        <span className="lockfile-label">Current lockfile SHA</span>
                        <code className="mono-copy detail-value">{displayProject.lock_sha256 || 'Not recorded yet'}</code>
                      </div>
                      <button className="button-secondary icon-action" type="button" aria-label="Download lockfile" title="Download lockfile" onClick={() => {
                        void downloadLockfile()
                      }}>
                        <DownloadIcon width={18} height={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field-grid">
                <div className="field-full">
                  <label htmlFor="env-custom">Requirements</label>
                  <textarea id="env-custom" value={environmentForm.custom_requirements_text} onChange={(event) => {
                    setEnvironmentForm((current) => ({ ...current, custom_requirements_text: event.target.value }))
                  }} />
                </div>
                <div className="field">
                  <label>Restart behavior</label>
                  <div className="checkbox-row">
                    <input id="env-restart" type="checkbox" checked={environmentForm.restart_if_running} onChange={(event) => {
                      setEnvironmentForm((current) => ({ ...current, restart_if_running: event.target.checked }))
                    }} />
                    <label htmlFor="env-restart">Restart if currently running</label>
                  </div>
                </div>
                <div className="field">
                  <label>Artifact invalidation</label>
                  <div className="checkbox-row">
                    <input id="env-mark-stale" type="checkbox" checked={environmentForm.mark_all_artifacts_stale} onChange={(event) => {
                      setEnvironmentForm((current) => ({ ...current, mark_all_artifacts_stale: event.target.checked }))
                    }} />
                    <label htmlFor="env-mark-stale">Mark artifacts stale after reinstall</label>
                  </div>
                </div>
              </div>
              <div className="button-row">
                <button className={classNames(environmentActionFeedback?.tone === 'success' ? 'button-saved' : 'button-open')} type="submit" disabled={savingEnvironment}>{environmentButtonLabel}</button>
              </div>
            </form>
          </div>
        </section>

        <section className="panel">
          <div className="panel-head">
            <h2>Container info</h2>
          </div>
          <div className="panel-body layout-grid">
            <div className="detail-meta-grid">
              <div className="detail-row">
                <span className="detail-label">Container name</span>
                <div className="detail-value mono-copy">{displayProject.runtime.container_name || 'Not running'}</div>
              </div>
              <div className="detail-row">
                <span className="detail-label">Container id</span>
                <div className="detail-value mono-copy">{truncateContainerId(displayProject.runtime.container_id)}</div>
              </div>
              <div className="detail-row">
                <span className="detail-label">Host port</span>
                <div className="detail-value mono-copy">{displayProject.runtime.container_port ?? 'Not running'}</div>
              </div>
              <div className="detail-row">
                <span className="detail-label">{runtimeTimestampLabel}</span>
                {runtimeTimestampValue ? (
                  <div className="timestamp-pair">
                    <strong>{formatRelativeTime(runtimeTimestampValue)}</strong>
                    <span className="muted">{formatDateTime(runtimeTimestampValue)}</span>
                  </div>
                ) : (
                  <div className="detail-value mono-copy">-</div>
                )}
              </div>
            </div>
            <div className="limits-card">
              <div className="limits-card-header">
                <div className="status-stack">
                  <strong>Runtime limits</strong>
                </div>
              </div>
              <form className="field-grid" onSubmit={onSaveLimits}>
                <div className="field">
                  <label htmlFor="limits-cpu">CPU limit (CPUs)</label>
                  <input id="limits-cpu" className="mono-copy" type="number" min={0} step="0.1" value={limitsForm.cpu_limit_input} onChange={(event) => {
                    setLimitsDirty(true)
                    setLimitsForm((current) => ({ ...current, cpu_limit_input: event.target.value }))
                  }} placeholder="Unlimited" disabled={limitsLocked} />
                </div>
                <div className="field">
                  <label htmlFor="limits-memory">Memory limit (GB)</label>
                  <input id="limits-memory" className="mono-copy" type="number" min={0} step="0.1" value={limitsForm.memory_limit_input} onChange={(event) => {
                    setLimitsDirty(true)
                    setLimitsForm((current) => ({ ...current, memory_limit_input: event.target.value }))
                  }} placeholder="Unlimited" disabled={limitsLocked} />
                </div>
                <div className="field">
                  <label htmlFor="limits-disk">Disk soft limit (GB)</label>
                  <input id="limits-disk" className="mono-copy" type="number" min={0} step="0.1" value={limitsForm.disk_soft_limit_input} onChange={(event) => {
                    setLimitsDirty(true)
                    setLimitsForm((current) => ({ ...current, disk_soft_limit_input: event.target.value }))
                  }} placeholder="Unlimited" disabled={limitsLocked} />
                </div>
                <div className="field">
                  <label>GPU access</label>
                  <div className="checkbox-row">
                    <input id="limits-gpu" type="checkbox" checked={limitsForm.gpu_enabled} onChange={(event) => {
                      setLimitsDirty(true)
                      setLimitsForm((current) => ({ ...current, gpu_enabled: event.target.checked }))
                    }} disabled={limitsLocked} />
                    <label htmlFor="limits-gpu">Enable GPU if supported on the host</label>
                  </div>
                </div>
                <div className="button-row">
                  <button className={classNames(limitsLocked ? 'button-neutral' : limitsActionFeedback?.tone === 'success' ? 'button-saved' : 'button-open')} type="submit" disabled={savingLimits || limitsLocked}>{limitsButtonLabel}</button>
                  {limitsLocked ? <span className="inline-feedback subtle">Runtime must be stopped before limits can change.</span> : null}
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panel-head">
            <h2>Job history</h2>
          </div>
          <div className="panel-body">
            <div className="jobs-list">
              {recentJobs.length === 0 ? <div className="empty-state">No recent jobs recorded for this project yet.</div> : null}
              {visibleJobs.map((job) => (
                <article className={classNames('job-row', jobStatusCardClass(job))} key={job.job_id}>
                  <div className="job-row-header">
                    <div className="job-row-top">
                      <strong>{job.job_type}</strong>
                      <span className="muted mono-copy">{job.job_id}</span>
                    </div>
                    <strong>{displayJobStatus(job)}</strong>
                  </div>
                  <div className="job-row-meta">
                    <div className="meta-item">
                      <span>Created</span>
                      <div className="timestamp-row">
                        <strong>{formatRelativeTime(job.created_at)}</strong>
                        <span className="muted">{formatDateTime(job.created_at)}</span>
                      </div>
                    </div>
                    <div className="meta-item">
                      <span>Duration</span>
                      <strong>{formatDurationBetween(job.started_at || job.created_at, job.finished_at)}</strong>
                    </div>
                  </div>
                  {job.job_type === 'create_project' || job.job_type === 'update_environment' || job.job_type === 'reinstall_environment' ? (
                    <JobLogPreview
                      job={job}
                      downloading={downloadingJobIds.includes(job.job_id)}
                      onDownload={job.log_path ? downloadJobLog : undefined}
                    />
                  ) : null}
                  {job.error_message ? <div className="error-banner">{job.error_message}</div> : null}
                </article>
              ))}
              {hasHiddenJobs ? (
                <div className="button-row centered jobs-list-footer">
                  <button className="button-secondary" type="button" onClick={() => setShowAllJobs(true)}>
                    Show more jobs ({recentJobs.length} total)
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panel-head">
            <h2>Project actions</h2>
          </div>
          <div className="panel-body">
            <div className="button-row project-actions-row">
              <div className="action-menu" ref={exportMenuRef}>
                <button
                  className="button-open"
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={exportMenuOpen}
                  disabled={!!downloadingExportMode}
                  onClick={(event) => {
                    event.stopPropagation()
                    setExportMenuOpen((current) => !current)
                  }}
                >
                  {downloadingExportMode ? 'Exporting...' : 'Export project'}
                </button>
                {exportMenuOpen ? (
                  <div className="action-popover" role="menu" onClick={(event) => event.stopPropagation()}>
                    <button
                      className="action-option"
                      type="button"
                      role="menuitem"
                      disabled={downloadingExportMode !== null}
                      onClick={() => {
                        void downloadProjectExport('code_only')
                      }}
                    >
                      <strong>Code only</strong>
                    </button>
                    <button
                      className="action-option"
                      type="button"
                      role="menuitem"
                      disabled={downloadingExportMode !== null}
                      onClick={() => {
                        void downloadProjectExport('code_and_data')
                      }}
                    >
                      <strong>Code and data</strong>
                    </button>
                    <button
                      className="action-option"
                      type="button"
                      role="menuitem"
                      disabled={downloadingExportMode !== null}
                      onClick={() => {
                        void downloadProjectExport('full')
                      }}
                    >
                      <strong>Full</strong>
                    </button>
                  </div>
                ) : null}
              </div>
              <button className="button-danger" type="button" onClick={onDeleteProject} disabled={deleting}>{deleting ? 'Deleting...' : 'Delete project'}</button>
            </div>
          </div>
        </section>
      </div>
    </AppChrome>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/projects/:projectId"
        element={
          <AuthGate>
            <ProjectPage />
          </AuthGate>
        }
      />
      <Route
        path="/"
        element={
          <AuthGate>
            <DashboardPage />
          </AuthGate>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

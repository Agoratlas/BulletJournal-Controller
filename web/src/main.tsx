import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'

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
    cpu_limit_millis: number
    memory_limit_bytes: number
    gpu_enabled: boolean
  }
  runtime: {
    container_name: string | null
    container_id: string | null
    container_port: number | null
    runtime_started_at: string | null
    runtime_stopped_at: string | null
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
}

type ProjectActionJobResponse = {
  job: JobRecord | null
  project?: Project | null
  already_running?: boolean
  already_stopped?: boolean
}

type AppState = {
  session: SessionResponse | null
  sessionLoading: boolean
  refreshSession: () => Promise<void>
  signOut: () => Promise<void>
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
    --ink: #1f2929;
    --muted: #61716d;
    --accent: #1d7b6c;
    --accent-soft: rgba(29, 123, 108, 0.12);
    --warm: #b86435;
    --warm-soft: rgba(184, 100, 53, 0.12);
    --line: rgba(31, 41, 41, 0.12);
    --shadow: 0 18px 54px rgba(39, 42, 40, 0.12);
    --radius-xl: 28px;
    --radius-lg: 20px;
    --radius-md: 14px;
  }
  * { box-sizing: border-box; }
  html, body, #root { min-height: 100%; }
  body {
    margin: 0;
    color: var(--ink);
    font-family: Georgia, 'Iowan Old Style', serif;
    background:
      radial-gradient(circle at 0% 0%, rgba(29, 123, 108, 0.2), transparent 28%),
      radial-gradient(circle at 100% 100%, rgba(184, 100, 53, 0.18), transparent 34%),
      linear-gradient(180deg, #f8f1e1, var(--bg));
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
    padding: 28px 18px 80px;
  }
  .masthead {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 18px;
    align-items: start;
    margin-bottom: 28px;
  }
  .brand-card {
    padding: 22px 24px;
    border-radius: var(--radius-xl);
    background: linear-gradient(145deg, rgba(255, 251, 243, 0.95), rgba(246, 239, 225, 0.92));
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
  }
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 5px 10px;
    border-radius: 999px;
    background: var(--accent-soft);
    color: var(--accent);
    font-size: 0.76rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .brand-card h1 {
    margin: 12px 0 8px;
    font-size: clamp(2.2rem, 4.5vw, 4rem);
    line-height: 0.95;
    letter-spacing: -0.03em;
  }
  .lede {
    margin: 0;
    max-width: 50rem;
    color: var(--muted);
    font-size: 1.03rem;
    line-height: 1.6;
  }
  .masthead-side {
    display: grid;
    gap: 12px;
  }
  .mini-card {
    padding: 16px 18px;
    border-radius: var(--radius-lg);
    background: var(--paper);
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
    backdrop-filter: blur(10px);
  }
  .mini-card strong,
  .mini-card span {
    display: block;
  }
  .muted {
    color: var(--muted);
  }
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
  }
  .nav-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .pill-link,
  .pill-button,
  .button,
  .button-secondary,
  .button-danger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 42px;
    padding: 0 15px;
    border-radius: 999px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: transform 120ms ease, box-shadow 120ms ease, background 120ms ease;
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
  .button,
  .pill-button {
    background: linear-gradient(135deg, var(--accent), #14574d);
    color: white;
    box-shadow: 0 10px 20px rgba(29, 123, 108, 0.2);
  }
  .button-danger {
    background: linear-gradient(135deg, var(--warm), #8f4925);
    color: white;
    box-shadow: 0 10px 20px rgba(184, 100, 53, 0.18);
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
    grid-template-columns: minmax(0, 1.7fr) minmax(300px, 0.95fr);
  }
  .panel {
    border-radius: var(--radius-xl);
    background: var(--paper);
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
    backdrop-filter: blur(10px);
  }
  .panel-head {
    padding: 22px 24px 0;
  }
  .panel-body {
    padding: 22px 24px 24px;
  }
  .panel-head h2,
  .panel-head h3,
  .panel-body h2,
  .panel-body h3 {
    margin: 10px 0 6px;
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
    align-items: baseline;
    gap: 12px;
    margin-bottom: 12px;
  }
  .group-header h3 {
    margin: 0;
    font-size: 1.25rem;
  }
  .project-cards {
    display: grid;
    gap: 14px;
  }
  .project-card {
    display: grid;
    gap: 16px;
    padding: 18px;
    border-radius: var(--radius-lg);
    background: rgba(255, 255, 255, 0.56);
    border: 1px solid var(--line);
  }
  .project-card-top {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 12px;
  }
  .project-card h4 {
    margin: 0 0 5px;
    font-size: 1.2rem;
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
  .meta-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px 18px;
  }
  .meta-item {
    display: grid;
    gap: 2px;
  }
  .meta-item span:first-child {
    color: var(--muted);
    font-size: 0.85rem;
  }
  .quick-actions,
  .button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .stats-grid {
    display: grid;
    gap: 12px;
  }
  .stat-card {
    padding: 16px 18px;
    border-radius: var(--radius-lg);
    background: rgba(255, 255, 255, 0.58);
    border: 1px solid var(--line);
  }
  .stat-card strong {
    display: block;
    font-size: 1.35rem;
    margin-bottom: 4px;
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
  input,
  textarea,
  select {
    width: 100%;
    padding: 12px 14px;
    border-radius: var(--radius-md);
    border: 1px solid rgba(31, 41, 41, 0.16);
    background: rgba(255, 255, 255, 0.78);
    color: var(--ink);
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
  }
  .job-row {
    display: grid;
    gap: 8px;
    padding: 14px 16px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.58);
    border: 1px solid var(--line);
  }
  .job-row-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
  .detail-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
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
    width: min(960px, 100%);
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  }
  .hero-panel,
  .form-panel {
    padding: 26px;
    border-radius: 28px;
    background: var(--paper);
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
  }
  .hero-panel h1,
  .form-panel h2 {
    margin: 12px 0 10px;
  }
  .hero-panel h1 {
    font-size: clamp(2.2rem, 5vw, 4rem);
    line-height: 0.95;
  }
  .hero-grid {
    display: grid;
    gap: 14px;
    margin-top: 24px;
  }
  .hero-note {
    padding: 16px 18px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.58);
    border: 1px solid var(--line);
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
  .subtle-link {
    color: var(--warm);
  }
  @media (max-width: 1040px) {
    .dashboard-grid,
    .detail-grid,
    .login-panel {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 760px) {
    .masthead,
    .topbar,
    .project-card-top,
    .group-header,
    .job-row-top,
    .modal-head {
      grid-template-columns: 1fr;
      display: grid;
    }
    .field-grid,
    .summary-grid,
    .meta-grid {
      grid-template-columns: 1fr;
    }
    .app-shell {
      padding: 18px 14px 56px;
    }
  }
`
document.head.appendChild(style)

function classNames(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
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

function useAppState(): AppState {
  const context = React.useContext(AppContext)
  if (!context) {
    throw new Error('App context is unavailable.')
  }
  return context
}

function usePolling(callback: () => void | Promise<void>, delay: number | null, deps: React.DependencyList) {
  useEffect(() => {
    if (delay === null) {
      return
    }
    void callback()
    const id = window.setInterval(() => {
      void callback()
    }, delay)
    return () => window.clearInterval(id)
  }, deps)
}

function AppProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<SessionResponse | null>(null)
  const [sessionLoading, setSessionLoading] = useState(true)

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

  const value = useMemo(() => ({ session, sessionLoading, refreshSession, signOut }), [refreshSession, session, sessionLoading, signOut])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

function AuthGate({ children }: { children: React.ReactNode }) {
  const { session, sessionLoading } = useAppState()
  const location = useLocation()

  if (sessionLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-card">
          <div className="eyebrow">Loading session</div>
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
      <div className="login-panel">
        <section className="hero-panel">
          <div className="eyebrow">Managed Runtime Control</div>
          <h1>One controller, many BulletJournal projects.</h1>
          <p className="lede">
            Sign in to create, start, stop, inspect, update, and proxy isolated BulletJournal runtimes through one authenticated origin.
          </p>
          <div className="hero-grid">
            <div className="hero-note">
              <strong>Managed environments</strong>
              <p className="section-copy">Each project owns explicit `pyproject.toml` and `uv.lock` files under controller management.</p>
            </div>
            <div className="hero-note">
              <strong>Container isolation</strong>
              <p className="section-copy">Projects run independently with separate Docker runtime limits and lifecycle tracking.</p>
            </div>
            <div className="hero-note">
              <strong>Authenticated gateway</strong>
              <p className="section-copy">Open the full project experience through `/p/&lt;project_id&gt;/...` without exposing runtime ports directly.</p>
            </div>
          </div>
        </section>

        <section className="form-panel">
          <div className="eyebrow">Sign In</div>
          <h2>Access the controller</h2>
          <p className="section-copy">Use a controller account created with `bulletjournal-controller create-user`.</p>
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
    </div>
  )
}

function AppChrome({ children }: { children: React.ReactNode }) {
  const { session, signOut } = useAppState()
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="app-shell">
      <header className="masthead">
        <section className="brand-card">
          <div className="eyebrow">BulletJournal Controller</div>
          <h1>Project control plane with authenticated proxy access.</h1>
          <p className="lede">
            Provision managed environments, inspect job progress, and open isolated BulletJournal runtimes through one controller origin.
          </p>
        </section>
        <aside className="masthead-side">
          <div className="mini-card">
            <span className="muted">Signed in as</span>
            <strong>{session?.user?.display_name || session?.user?.username || 'Unknown user'}</strong>
            <span className="muted">{session?.user?.username || ''}</span>
          </div>
          <div className="mini-card">
            <div className="nav-pills">
              <Link className={classNames('pill-link', location.pathname === '/' && 'active')} to="/">Dashboard</Link>
              <button
                className="button-secondary"
                type="button"
                onClick={async () => {
                  await signOut()
                  navigate('/login', { replace: true })
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </aside>
      </header>
      {children}
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
  const [showCreateModal, setShowCreateModal] = useState(false)
  const navigate = useNavigate()

  const fetchDashboard = useCallback(async () => {
    try {
      const [nextProjects, nextSystemInfo] = await Promise.all([
        request<Project[]>('/api/v1/projects'),
        request<SystemInfo>('/api/v1/system/info'),
      ])
      setProjects(nextProjects)
      setSystemInfo(nextSystemInfo)
      setError(null)
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : 'Failed to load dashboard.')
    } finally {
      setLoading(false)
    }
  }, [])

  usePolling(fetchDashboard, 5000, [fetchDashboard])

  useEffect(() => {
    if (activeJobIds.length === 0) {
      return
    }
    const id = window.setInterval(async () => {
      const responses = await Promise.allSettled(activeJobIds.map((jobId) => request<JobRecord>(`/api/v1/jobs/${jobId}`)))
      const stillActive: string[] = []
      let shouldRefresh = false
      for (const result of responses) {
        if (result.status === 'fulfilled') {
          if (result.value.status === 'queued' || result.value.status === 'running') {
            stillActive.push(result.value.job_id)
          } else {
            shouldRefresh = true
          }
        }
      }
      setActiveJobIds(stillActive)
      if (shouldRefresh) {
        await fetchDashboard()
      }
    }, 2000)
    return () => window.clearInterval(id)
  }, [activeJobIds, fetchDashboard])

  const groupedProjects = useMemo(() => {
    const groups: Record<'Running' | 'Stopped' | 'Error', Project[]> = {
      Running: [],
      Stopped: [],
      Error: [],
    }
    for (const project of projects) {
      if (project.status === 'running' || project.status === 'starting' || project.status === 'stopping') {
        groups.Running.push(project)
      } else if (project.status === 'error') {
        groups.Error.push(project)
      } else {
        groups.Stopped.push(project)
      }
    }
    return groups
  }, [projects])

  async function queueProjectAction(projectId: string, action: 'start' | 'stop') {
    try {
      setActionError(null)
      const response = await request<ProjectActionJobResponse>(`/api/v1/projects/${projectId}/${action}`, {
        method: 'POST',
      })
      if (response.job) {
        setActiveJobIds((current) => Array.from(new Set([...current, response.job!.job_id])))
      }
      if (response.already_running) {
        setActionError('Project is already running.')
      }
      if (response.already_stopped) {
        setActionError('Project is already stopped.')
      }
      await fetchDashboard()
    } catch (nextError) {
      setActionError(nextError instanceof Error ? nextError.message : `Failed to ${action} project.`)
    }
  }

  return (
    <AppChrome>
      <div className="topbar">
        <div className="nav-pills">
          <span className="eyebrow">Dashboard</span>
          {activeJobIds.length > 0 ? <span className="badge">Watching {activeJobIds.length} active job{activeJobIds.length === 1 ? '' : 's'}</span> : null}
        </div>
        <button className="button" type="button" onClick={() => setShowCreateModal(true)}>Create Project</button>
      </div>

      {error ? <div className="error-banner">{error}</div> : null}
      {actionError ? <div className="error-banner">{actionError}</div> : null}

      <div className="dashboard-grid">
        <section className="panel">
          <div className="panel-head">
            <div className="eyebrow">Managed projects</div>
            <h2>Runtime groups</h2>
            <p className="section-copy">Projects are grouped client-side into running, stopped, and error states with quick access to start, stop, open, and detail views.</p>
          </div>
          <div className="panel-body">
            {loading ? <div className="empty-state">Loading projects...</div> : null}
            <div className="group-list">
              {(['Running', 'Stopped', 'Error'] as const).map((groupName) => {
                const group = groupedProjects[groupName]
                return (
                  <section key={groupName}>
                    <div className="group-header">
                      <h3>{groupName}</h3>
                      <span className="muted">{group.length} project{group.length === 1 ? '' : 's'}</span>
                    </div>
                    {group.length === 0 ? (
                      <div className="empty-state">No projects currently in this group.</div>
                    ) : (
                      <div className="project-cards">
                        {group.map((project) => (
                          <article className="project-card" key={project.project_id}>
                            <div className="project-card-top">
                              <div>
                                <h4>{project.project_id}</h4>
                                <div className="badges">
                                  <span className={classNames('badge', project.status === 'error' ? 'error' : project.status === 'running' ? 'running' : 'stopped')}>
                                    {project.status}
                                  </span>
                                  {project.status_reason ? <span className="badge">{project.status_reason}</span> : null}
                                  <span className={classNames('badge', project.install_status === 'ready' ? 'install-ready' : project.install_status === 'failed' ? 'install-failed' : undefined)}>
                                    install {project.install_status}
                                  </span>
                                </div>
                              </div>
                              <div className="muted">{project.bulletjournal_version}</div>
                            </div>
                            <div className="meta-grid">
                              <div className="meta-item"><span>Python</span><strong>{project.python_version}</strong></div>
                              <div className="meta-item"><span>Last edit</span><strong>{formatDateTime(project.last_edit_at)}</strong></div>
                              <div className="meta-item"><span>Last run finished</span><strong>{formatDateTime(project.last_run_finished_at)}</strong></div>
                              <div className="meta-item"><span>Runtime port</span><strong>{project.runtime.container_port ?? 'not running'}</strong></div>
                            </div>
                            <div className="quick-actions">
                              <a className="button-secondary" href={`/p/${project.project_id}/`} target="_blank" rel="noreferrer">Open</a>
                              <button className="button-secondary" type="button" onClick={() => queueProjectAction(project.project_id, 'start')}>Start</button>
                              <button className="button-secondary" type="button" onClick={() => queueProjectAction(project.project_id, 'stop')}>Stop</button>
                              <button className="button" type="button" onClick={() => navigate(`/projects/${project.project_id}`)}>Details</button>
                            </div>
                          </article>
                        ))}
                      </div>
                    )}
                  </section>
                )
              })}
            </div>
          </div>
        </section>

        <aside className="layout-grid">
          <section className="panel">
            <div className="panel-head">
              <div className="eyebrow">Instance defaults</div>
              <h2>{systemInfo?.title || 'Controller instance'}</h2>
            </div>
            <div className="panel-body stats-grid">
              <div className="stat-card">
                <span className="muted">Instance id</span>
                <strong>{systemInfo?.instance_id || 'Loading...'}</strong>
              </div>
              <div className="stat-card">
                <span className="muted">Default BulletJournal</span>
                <strong>{systemInfo?.default_bulletjournal_version || 'Loading...'}</strong>
              </div>
              <div className="stat-card">
                <span className="muted">Default Python</span>
                <strong>{systemInfo?.default_python_version || 'Loading...'}</strong>
              </div>
              <div className="stat-card">
                <span className="muted">Tracked projects</span>
                <strong>{projects.length}</strong>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panel-head">
              <div className="eyebrow">Default dependency text</div>
              <h2>Creation baseline</h2>
            </div>
            <div className="panel-body">
              <p className="section-copy">The create dialog starts with the merged default dependency text from the controller instance configuration.</p>
              <textarea readOnly value={systemInfo?.default_dependencies_text || 'Loading default dependencies...'} />
            </div>
          </section>
        </aside>
      </div>

      {showCreateModal && systemInfo ? (
        <CreateProjectModal
          systemInfo={systemInfo}
          onClose={() => setShowCreateModal(false)}
          onCreated={(jobId) => {
            setShowCreateModal(false)
            setActiveJobIds((current) => Array.from(new Set([...current, jobId])))
            void fetchDashboard()
          }}
        />
      ) : null}
    </AppChrome>
  )
}

function CreateProjectModal({
  systemInfo,
  onClose,
  onCreated,
}: {
  systemInfo: SystemInfo
  onClose: () => void
  onCreated: (jobId: string) => void
}) {
  const [form, setForm] = useState({
    project_id: '',
    python_version: systemInfo.default_python_version,
    bulletjournal_version: systemInfo.default_bulletjournal_version,
    custom_requirements_text: systemInfo.default_dependencies_text,
    cpu_limit_millis: 2000,
    memory_limit_bytes: 4294967296,
    gpu_enabled: false,
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const response = await request<{ project: { project_id: string }; job: { job_id: string } }>('/api/v1/projects', {
        method: 'POST',
        body: JSON.stringify(form),
      })
      onCreated(response.job.job_id)
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : 'Failed to create project.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section className="modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
        <div className="modal-head">
          <div>
            <div className="eyebrow">Create Project</div>
            <h2>Provision a managed BulletJournal runtime</h2>
            <p className="section-copy">Project ids become both filesystem roots and runtime identifiers. Use the default dependency text as a starting point, then override as needed.</p>
          </div>
          <button className="close-button" type="button" onClick={onClose} aria-label="Close dialog">×</button>
        </div>
        <div className="modal-body">
          <form className="layout-grid" onSubmit={onSubmit}>
            <div className="field-grid">
              <div className="field">
                <label htmlFor="create-project-id">Project id</label>
                <input id="create-project-id" value={form.project_id} onChange={(event) => setForm((current) => ({ ...current, project_id: event.target.value }))} placeholder="study-a" required />
              </div>
              <div className="field">
                <label htmlFor="create-python">Python version</label>
                <input id="create-python" value={form.python_version} onChange={(event) => setForm((current) => ({ ...current, python_version: event.target.value }))} required />
              </div>
              <div className="field">
                <label htmlFor="create-bulletjournal">BulletJournal version</label>
                <input id="create-bulletjournal" value={form.bulletjournal_version} onChange={(event) => setForm((current) => ({ ...current, bulletjournal_version: event.target.value }))} required />
              </div>
              <div className="field">
                <label htmlFor="create-cpu">CPU limit (millis)</label>
                <input id="create-cpu" type="number" min={1} value={form.cpu_limit_millis} onChange={(event) => setForm((current) => ({ ...current, cpu_limit_millis: Number(event.target.value) }))} required />
              </div>
              <div className="field">
                <label htmlFor="create-memory">Memory limit (bytes)</label>
                <input id="create-memory" type="number" min={1} value={form.memory_limit_bytes} onChange={(event) => setForm((current) => ({ ...current, memory_limit_bytes: Number(event.target.value) }))} required />
              </div>
              <div className="field">
                <label>GPU access</label>
                <div className="checkbox-row">
                  <input id="create-gpu" type="checkbox" checked={form.gpu_enabled} onChange={(event) => setForm((current) => ({ ...current, gpu_enabled: event.target.checked }))} />
                  <label htmlFor="create-gpu">Enable GPU if supported on the host</label>
                </div>
              </div>
              <div className="field-full">
                <label htmlFor="create-dependencies">Dependency text</label>
                <textarea id="create-dependencies" value={form.custom_requirements_text} onChange={(event) => setForm((current) => ({ ...current, custom_requirements_text: event.target.value }))} />
              </div>
            </div>
            {error ? <div className="error-banner">{error}</div> : null}
            <div className="button-row">
              <button className="button" type="submit" disabled={submitting}>{submitting ? 'Creating...' : 'Create Project'}</button>
              <button className="button-secondary" type="button" onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

function ProjectPage() {
  const { projectId = '' } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [flash, setFlash] = useState<string | null>(null)
  const [activeJobIds, setActiveJobIds] = useState<string[]>([])
  const [environmentForm, setEnvironmentForm] = useState({
    python_version: '',
    bulletjournal_version: '',
    custom_requirements_text: '',
    mark_all_artifacts_stale: true,
    restart_if_running: true,
  })
  const [limitsForm, setLimitsForm] = useState({
    cpu_limit_millis: 0,
    memory_limit_bytes: 0,
    gpu_enabled: false,
  })
  const [savingEnvironment, setSavingEnvironment] = useState(false)
  const [savingLimits, setSavingLimits] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const fetchProject = useCallback(async () => {
    try {
      const nextProject = await request<Project>(`/api/v1/projects/${projectId}`)
      setProject(nextProject)
      setEnvironmentForm({
        python_version: nextProject.python_version,
        bulletjournal_version: nextProject.bulletjournal_version,
        custom_requirements_text: nextProject.custom_requirements_text,
        mark_all_artifacts_stale: true,
        restart_if_running: true,
      })
      setLimitsForm({
        cpu_limit_millis: nextProject.limits.cpu_limit_millis,
        memory_limit_bytes: nextProject.limits.memory_limit_bytes,
        gpu_enabled: nextProject.limits.gpu_enabled,
      })
      setError(null)
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : 'Failed to load project.')
    } finally {
      setLoading(false)
    }
  }, [projectId])

  usePolling(fetchProject, 5000, [fetchProject])

  useEffect(() => {
    if (activeJobIds.length === 0) {
      return
    }
    const id = window.setInterval(async () => {
      const responses = await Promise.allSettled(activeJobIds.map((jobId) => request<JobRecord>(`/api/v1/jobs/${jobId}`)))
      const stillActive: string[] = []
      let changed = false
      for (const result of responses) {
        if (result.status === 'fulfilled') {
          if (result.value.status === 'queued' || result.value.status === 'running') {
            stillActive.push(result.value.job_id)
          } else {
            changed = true
          }
        }
      }
      setActiveJobIds(stillActive)
      if (changed) {
        await fetchProject()
      }
    }, 2000)
    return () => window.clearInterval(id)
  }, [activeJobIds, fetchProject])

  async function queueAction(action: 'start' | 'stop' | 'reinstall-environment') {
    try {
      const body = action === 'reinstall-environment' ? JSON.stringify({ mark_all_artifacts_stale: true, restart_if_running: true }) : undefined
      const response = await request<ProjectActionJobResponse>(`/api/v1/projects/${projectId}/${action}`, {
        method: 'POST',
        body,
      })
      if (response.job) {
        setFlash(`Queued ${response.job.job_type}.`)
        setActiveJobIds((current) => Array.from(new Set([...current, response.job!.job_id])))
      } else if (response.already_running) {
        setFlash('Project is already running.')
      } else if (response.already_stopped) {
        setFlash('Project is already stopped.')
      }
      await fetchProject()
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : `Failed to ${action}.`)
    }
  }

  async function onSaveEnvironment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSavingEnvironment(true)
    setError(null)
    try {
      const response = await request<ProjectActionJobResponse>(`/api/v1/projects/${projectId}/update-environment`, {
        method: 'POST',
        body: JSON.stringify(environmentForm),
      })
      if (!response.job) {
        throw new Error('Environment update did not return a queued job.')
      }
      const job = response.job
      setFlash(`Queued ${job.job_type}.`)
      setActiveJobIds((current) => Array.from(new Set([...current, job.job_id])))
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : 'Failed to queue environment update.')
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
        body: JSON.stringify(limitsForm),
      })
      setProject(nextProject)
      setFlash('Updated runtime limits.')
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
      await request<void>(`/api/v1/projects/${projectId}`, { method: 'DELETE' })
      navigate('/', { replace: true })
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : 'Failed to delete project.')
    } finally {
      setDeleting(false)
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

  return (
    <AppChrome>
      <div className="topbar">
        <div className="nav-pills">
          <Link className="pill-link" to="/">Back to dashboard</Link>
          <span className="eyebrow">Project detail</span>
          {activeJobIds.length > 0 ? <span className="badge">Polling {activeJobIds.length} active job{activeJobIds.length === 1 ? '' : 's'}</span> : null}
        </div>
        <div className="button-row">
          <a className="button" href={`/p/${project.project_id}/`} target="_blank" rel="noreferrer">Open Project</a>
          <button className="button-secondary" type="button" onClick={() => queueAction('start')}>Start</button>
          <button className="button-secondary" type="button" onClick={() => queueAction('stop')}>Stop</button>
        </div>
      </div>

      {flash ? <div className="success-banner">{flash}</div> : null}
      {error ? <div className="error-banner">{error}</div> : null}

      <div className="detail-grid">
        <div className="layout-grid">
          <section className="panel">
            <div className="panel-head">
              <div className="eyebrow">Project summary</div>
              <h2>{project.project_id}</h2>
              <p className="section-copy">Controller metadata reflects project lifecycle state, recent runtime activity, lock ownership, and configured dependency inputs.</p>
            </div>
            <div className="panel-body summary-grid">
              <div className="summary-block">
                <h3>Status</h3>
                <div className="badges">
                  <span className={classNames('badge', project.status === 'error' ? 'error' : project.status === 'running' ? 'running' : 'stopped')}>{project.status}</span>
                  {project.status_reason ? <span className="badge">{project.status_reason}</span> : null}
                  <span className={classNames('badge', project.install_status === 'ready' ? 'install-ready' : project.install_status === 'failed' ? 'install-failed' : undefined)}>
                    install {project.install_status}
                  </span>
                </div>
                <p className="section-copy">Last install: {formatDateTime(project.last_install_at)}</p>
              </div>
              <div className="summary-block">
                <h3>Versions</h3>
                <p className="section-copy">BulletJournal {project.bulletjournal_version}</p>
                <p className="section-copy">Python {project.python_version}</p>
                <p className="section-copy">Lock SHA: {project.lock_sha256 || 'Not recorded yet'}</p>
              </div>
              <div className="summary-block">
                <h3>Edits and runs</h3>
                <p className="section-copy">Last edit: {formatDateTime(project.last_edit_at)}</p>
                <p className="section-copy">Last run finished: {formatDateTime(project.last_run_finished_at)}</p>
                <p className="section-copy">Idle eligible at: {formatDateTime(project.idle_shutdown_eligible_at)}</p>
              </div>
              <div className="summary-block">
                <h3>Filesystem</h3>
                <p className="section-copy">Root path: <code>{project.root_path}</code></p>
                <p className="section-copy">Created: {formatDateTime(project.created_at)}</p>
                <p className="section-copy">Updated: {formatDateTime(project.updated_at)}</p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panel-head">
              <div className="eyebrow">Environment editor</div>
              <h2>Managed dependency inputs</h2>
              <p className="section-copy">Saving environment changes rewrites `pyproject.toml`, queues install work, and can optionally mark all artifacts stale.</p>
            </div>
            <div className="panel-body">
              <form className="layout-grid" onSubmit={onSaveEnvironment}>
                <div className="field-grid">
                  <div className="field">
                    <label htmlFor="env-python">Python version</label>
                    <input id="env-python" value={environmentForm.python_version} onChange={(event) => setEnvironmentForm((current) => ({ ...current, python_version: event.target.value }))} required />
                  </div>
                  <div className="field">
                    <label htmlFor="env-bulletjournal">BulletJournal version</label>
                    <input id="env-bulletjournal" value={environmentForm.bulletjournal_version} onChange={(event) => setEnvironmentForm((current) => ({ ...current, bulletjournal_version: event.target.value }))} required />
                  </div>
                  <div className="field-full">
                    <label htmlFor="env-custom">Custom requirements text</label>
                    <textarea id="env-custom" value={environmentForm.custom_requirements_text} onChange={(event) => setEnvironmentForm((current) => ({ ...current, custom_requirements_text: event.target.value }))} />
                  </div>
                  <div className="field">
                    <label>Artifact invalidation</label>
                    <div className="checkbox-row">
                      <input id="env-stale" type="checkbox" checked={environmentForm.mark_all_artifacts_stale} onChange={(event) => setEnvironmentForm((current) => ({ ...current, mark_all_artifacts_stale: event.target.checked }))} />
                      <label htmlFor="env-stale">Mark all artifacts stale after install</label>
                    </div>
                  </div>
                  <div className="field">
                    <label>Restart behavior</label>
                    <div className="checkbox-row">
                      <input id="env-restart" type="checkbox" checked={environmentForm.restart_if_running} onChange={(event) => setEnvironmentForm((current) => ({ ...current, restart_if_running: event.target.checked }))} />
                      <label htmlFor="env-restart">Restart automatically if currently running</label>
                    </div>
                  </div>
                </div>
                <div className="button-row">
                  <button className="button" type="submit" disabled={savingEnvironment}>{savingEnvironment ? 'Queueing...' : 'Save Environment Changes'}</button>
                  <button className="button-secondary" type="button" onClick={() => queueAction('reinstall-environment')}>Reinstall Environment</button>
                </div>
              </form>
            </div>
          </section>
        </div>

        <aside className="layout-grid">
          <section className="panel">
            <div className="panel-head">
              <div className="eyebrow">Runtime summary</div>
              <h2>Container and limits</h2>
            </div>
            <div className="panel-body summary-grid">
              <div className="summary-block">
                <h3>Container</h3>
                <p className="section-copy">Name: {project.runtime.container_name || 'Not running'}</p>
                <p className="section-copy">Id: {project.runtime.container_id || 'Not running'}</p>
                <p className="section-copy">Host port: {project.runtime.container_port ?? 'Not running'}</p>
              </div>
              <div className="summary-block">
                <h3>Runtime clock</h3>
                <p className="section-copy">Started: {formatDateTime(project.runtime.runtime_started_at)}</p>
                <p className="section-copy">Stopped: {formatDateTime(project.runtime.runtime_stopped_at)}</p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panel-head">
              <div className="eyebrow">Resource limits editor</div>
              <h2>Adjust runtime constraints</h2>
            </div>
            <div className="panel-body">
              <form className="layout-grid" onSubmit={onSaveLimits}>
                <div className="field">
                  <label htmlFor="limits-cpu">CPU limit (millis)</label>
                  <input id="limits-cpu" type="number" min={1} value={limitsForm.cpu_limit_millis} onChange={(event) => setLimitsForm((current) => ({ ...current, cpu_limit_millis: Number(event.target.value) }))} required />
                </div>
                <div className="field">
                  <label htmlFor="limits-memory">Memory limit</label>
                  <input id="limits-memory" type="number" min={1} value={limitsForm.memory_limit_bytes} onChange={(event) => setLimitsForm((current) => ({ ...current, memory_limit_bytes: Number(event.target.value) }))} required />
                  <span className="muted">Current display: {formatBytes(limitsForm.memory_limit_bytes)}</span>
                </div>
                <div className="field-full">
                  <label>GPU access</label>
                  <div className="checkbox-row">
                    <input id="limits-gpu" type="checkbox" checked={limitsForm.gpu_enabled} onChange={(event) => setLimitsForm((current) => ({ ...current, gpu_enabled: event.target.checked }))} />
                    <label htmlFor="limits-gpu">Enable GPU for this project when the host supports it</label>
                  </div>
                </div>
                <div className="button-row">
                  <button className="button" type="submit" disabled={savingLimits}>{savingLimits ? 'Saving...' : 'Save Limits'}</button>
                </div>
              </form>
            </div>
          </section>

          <section className="panel">
            <div className="panel-head">
              <div className="eyebrow">Recent jobs</div>
              <h2>Project work queue</h2>
            </div>
            <div className="panel-body">
              <div className="jobs-list">
                {(project.recent_jobs || []).length === 0 ? <div className="empty-state">No recent jobs recorded for this project yet.</div> : null}
                {(project.recent_jobs || []).map((job) => (
                  <article className="job-row" key={job.job_id}>
                    <div className="job-row-top">
                      <strong>{job.job_type}</strong>
                      <span className={classNames('badge', job.status === 'failed' ? 'error' : job.status === 'running' ? 'running' : 'stopped')}>{job.status}</span>
                    </div>
                    <span className="muted">{job.job_id}</span>
                    <span className="muted">Created {formatDateTime(job.created_at)}</span>
                    {job.error_message ? <div className="error-banner">{job.error_message}</div> : null}
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panel-head">
              <div className="eyebrow">Danger zone</div>
              <h2>Delete managed project</h2>
            </div>
            <div className="panel-body">
              <p className="section-copy">Deletion stops the runtime if needed, removes the project root from disk, deletes controller metadata, and frees the project id for clean reuse.</p>
              <div className="button-row">
                <button className="button-danger" type="button" onClick={onDeleteProject} disabled={deleting}>{deleting ? 'Deleting...' : 'Delete Project'}</button>
              </div>
            </div>
          </section>
        </aside>
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

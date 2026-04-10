import type { ReactNode } from 'react'

interface AppShellProps {
  children: ReactNode
  sidebar?: ReactNode
  subtitle?: string
  title: string
}

export const AppShell = ({ children, sidebar, subtitle, title }: AppShellProps) => {
  return (
    <div className="app-shell">
      <main className="app-page">
        <header className="app-header">
          <div className="app-header__title">
            <h1>{title}</h1>
            {subtitle ? <p>{subtitle}</p> : null}
          </div>
        </header>

        <section className="app-content">
          <div className="app-main-content">{children}</div>
          {sidebar ? <aside className="app-aside">{sidebar}</aside> : null}
        </section>
      </main>
    </div>
  )
}

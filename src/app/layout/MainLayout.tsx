import type { ReactNode } from 'react'
import { Card } from '../components/ui/Card'
import type { AppView } from '../../App'
import { AppShell } from './AppShell'

interface MainLayoutProps {
  children: ReactNode
  currentView: AppView
  navigate: (view: AppView) => void
  views: readonly AppView[]
}

export const MainLayout = ({ children, currentView, navigate, views }: MainLayoutProps) => {
  return (
    <AppShell
      title="Value Engine"
      subtitle="Navegação interna sem reload, compatível com injeção via Modern Script no SharePoint."
      sidebar={
        <>
          <Card title="Navegação">
            <nav aria-label="Views do Value Engine" className="app-nav">
              {views.map((view) => {
                const isActive = view === currentView

                return (
                  <button
                    key={view}
                    className={`app-nav__item ${isActive ? 'app-nav__item--active' : ''}`.trim()}
                    onClick={() => navigate(view)}
                    type="button"
                  >
                    {view}
                  </button>
                )
              })}
            </nav>
          </Card>
          <Card title="Status">
            <p className="app-muted-text">View atual: {currentView}</p>
            <p className="app-muted-text">Entrada única preservada em main.tsx.</p>
          </Card>
        </>
      }
    >
      {children}
    </AppShell>
  )
}

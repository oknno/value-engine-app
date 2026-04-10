import type { ReactNode } from 'react'
import { Card } from '../components/ui/Card'
import { AppShell } from './AppShell'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <AppShell
      title="Value Engine"
      subtitle="Workspace inicial para compor páginas e fluxos SharePoint."
      sidebar={
        <>
          <Card title="Navegação">
            <nav className="app-nav">
              <a className="app-nav__item app-nav__item--active" href="#home">
                Home
              </a>
            </nav>
          </Card>
          <Card title="Status">
            <p className="app-muted-text">Ambiente carregado e pronto para uso.</p>
          </Card>
        </>
      }
    >
      {children}
    </AppShell>
  )
}

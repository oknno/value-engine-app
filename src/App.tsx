import { useState } from 'react'
import './App.css'
import { Card } from './app/components/ui/Card'
import { MainLayout } from './app/layout/MainLayout'
import { APP_VIEW_COPY, APP_VIEWS, type AppView } from './domain/constants/appViews'

export const views = APP_VIEWS

function App() {
  const [currentView, setCurrentView] = useState<AppView>('Iniciativas')

  const navigate = (view: AppView) => {
    setCurrentView(view)
  }

  return (
    <MainLayout currentView={currentView} navigate={navigate} views={views}>
      <div className="view-page">
        <Card title={currentView}>
          <p>{APP_VIEW_COPY[currentView]}</p>
          <p className="app-muted-text">
            Navegação interna por estado ativa via <code>currentView</code> e <code>navigate(view)</code>,
            sem recarregar a página.
          </p>
        </Card>
      </div>
    </MainLayout>
  )
}

export default App

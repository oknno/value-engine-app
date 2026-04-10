import { useMemo, useState } from 'react'
import './App.css'
import { Card } from './app/components/ui/Card'
import { MainLayout } from './app/layout/MainLayout'

export const views = [
  'Iniciativas',
  'Componentes',
  'Inputs',
  'Conversões',
  'Custos',
  'Aprovação',
  'Resultados',
  'Controle de Fechamento',
  'Justificativas',
  'Auditoria',
] as const

export type AppView = (typeof views)[number]

function App() {
  const [currentView, setCurrentView] = useState<AppView>('Iniciativas')

  const viewCopy = useMemo(
    () => ({
      Iniciativas: 'Cadastro e priorização das iniciativas estratégicas de valor.',
      Componentes: 'Gestão dos componentes que estruturam cada iniciativa.',
      Inputs: 'Entrada e validação dos dados necessários para processamento.',
      Conversões: 'Parâmetros de conversão aplicados na transformação de valores.',
      Custos: 'Consolidação dos custos e rateios vinculados às iniciativas.',
      Aprovação: 'Fluxo de aprovação interno com trilha de decisão.',
      Resultados: 'Visualização dos resultados consolidados e indicadores.',
      'Controle de Fechamento': 'Checklist e status do fechamento mensal do ciclo.',
      Justificativas: 'Registro das justificativas para variações e exceções.',
      Auditoria: 'Rastreabilidade de alterações, eventos e evidências do processo.',
    }),
    [],
  )

  const navigate = (view: AppView) => {
    setCurrentView(view)
  }

  return (
    <MainLayout currentView={currentView} navigate={navigate} views={views}>
      <div className="view-page">
        <Card title={currentView}>
          <p>{viewCopy[currentView]}</p>
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

import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'

export const HomePage = () => {
  return (
    <div className="home-page">
      <Card title="Página inicial">
        <p>
          Esta é a composição mínima da aplicação com shell, layout principal e conteúdo funcional para
          evoluir o MVP.
        </p>
        <div className="home-page__actions">
          <Button>Nova ação</Button>
          <Button variant="secondary">Ver documentação</Button>
        </div>
      </Card>
    </div>
  )
}

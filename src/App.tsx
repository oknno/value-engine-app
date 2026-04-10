import './App.css'
import { useState } from 'react'
import { Button } from './app/components/ui/Button'
import { Card } from './app/components/ui/Card'
import { Input } from './app/components/ui/Input'

function App() {
  const [name, setName] = useState('')

  return (
    <div className="app-shell">
      <main className="app-page">
        <header className="app-header">
          <div className="app-header__title">
            <h1>Starter Kit React + SharePoint</h1>
            <p>Base MVP com configuração, cliente HTTP e componentes essenciais.</p>
          </div>
        </header>

        <section className="app-content" style={{ gridTemplateColumns: '1fr', maxWidth: 640 }}>
          <Card title="Formulário inicial">
            <div style={{ display: 'grid', gap: 12 }}>
              <Input
                id="name"
                label="Nome"
                onChange={(event) => setName(event.target.value)}
                placeholder="Digite seu nome"
                value={name}
              />
              <div style={{ display: 'flex', gap: 8 }}>
                <Button>Salvar</Button>
                <Button variant="secondary">Cancelar</Button>
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}

export default App

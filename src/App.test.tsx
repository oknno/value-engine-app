import { renderToString } from 'react-dom/server'
import App from './App'

describe('App', () => {
  it('renderiza a view padrão de Iniciativas', () => {
    const html = renderToString(<App />)

    expect(html).toContain('Iniciativas')
    expect(html).toContain('Navegação interna por estado ativa')
  })
})

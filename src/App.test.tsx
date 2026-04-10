import { renderToString } from 'react-dom/server'
import App from './App'

describe('App', () => {
  it('renderiza o conteúdo inicial da HomePage', () => {
    const html = renderToString(<App />)

    expect(html).toContain('Página inicial')
  })
})

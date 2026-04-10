import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BootstrapLoader } from './app/bootstrap/BootstrapLoader'
import { AppProviders } from './app/providers/AppProviders'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <BootstrapLoader>
        <App />
      </BootstrapLoader>
    </AppProviders>
  </StrictMode>,
)

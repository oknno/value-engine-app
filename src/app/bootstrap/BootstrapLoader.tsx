import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { ensureConfig } from './appConfig'

type BootstrapStatus = 'loading' | 'ready' | 'error'

interface BootstrapLoaderProps {
  children: ReactNode
}

export const BootstrapLoader = ({ children }: BootstrapLoaderProps) => {
  const [status, setStatus] = useState<BootstrapStatus>('loading')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    try {
      ensureConfig()
      setStatus('ready')
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Falha ao inicializar a aplicação.'
      setErrorMessage(message)
      setStatus('error')
    }
  }, [])

  if (status === 'loading') {
    return (
      <div className="bootstrap-state" role="status">
        <p>Inicializando aplicação...</p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="bootstrap-state bootstrap-state--error" role="alert">
        <h1>Erro de inicialização</h1>
        <p>{errorMessage}</p>
      </div>
    )
  }

  return <>{children}</>
}

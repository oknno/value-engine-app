export type WorkflowState = 'RASCUNHO' | 'EM_REVISAO' | 'APROVADO' | 'PUBLICADO' | 'ARQUIVADO'

export type WorkflowAction =
  | 'ENVIAR_REVISAO'
  | 'RETORNAR_CORRECAO'
  | 'APROVAR'
  | 'PUBLICAR'
  | 'ARQUIVAR'
  | 'REABRIR'

export interface WorkflowTransition {
  from: WorkflowState
  action: WorkflowAction
  to: WorkflowState
  requiresJustification?: boolean
}

export interface WorkflowValidationResult {
  valid: boolean
  reason?: string
}

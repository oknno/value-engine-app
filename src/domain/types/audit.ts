export type AuditEntityType = 'WORKFLOW' | 'PERIOD' | 'BASE_ZERO' | 'ACCESS'

export type AuditActionType =
  | 'CRIADO'
  | 'ATUALIZADO'
  | 'TRANSICAO_WORKFLOW'
  | 'REABERTURA_COMPETENCIA'
  | 'JUSTIFICATIVA_REGISTRADA'
  | 'CONSULTA'

export interface AuditActor {
  userId: string
  displayName: string
  role: string
}

export interface AuditEntry {
  id: string
  occurredAt: string
  entityType: AuditEntityType
  entityId: string
  action: AuditActionType
  actor: AuditActor
  metadata?: Record<string, unknown>
}

export interface AuditFilters {
  fromDate?: string
  toDate?: string
  userId?: string
  entityId?: string
  action?: AuditActionType
}

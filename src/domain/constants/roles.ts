export const ROLES = [
  'ADMIN',
  'GESTOR_INICIATIVA',
  'ANALISTA_FINANCEIRO',
  'APROVADOR',
  'AUDITOR',
  'VISUALIZADOR',
] as const

export type UserRole = (typeof ROLES)[number]

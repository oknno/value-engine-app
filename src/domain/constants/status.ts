export const WORKFLOW_STATUS = ['RASCUNHO', 'EM_REVISAO', 'APROVADO', 'PUBLICADO', 'ARQUIVADO'] as const

export const PERIOD_STATUS = ['ABERTO', 'EM_FECHAMENTO', 'FECHADO'] as const

export type WorkflowStatus = (typeof WORKFLOW_STATUS)[number]
export type PeriodStatus = (typeof PERIOD_STATUS)[number]

export type JustificationCategory =
  | 'REABERTURA_COMPETENCIA'
  | 'OVERRIDE_FLUXO'
  | 'APROVACAO_FORA_PADRAO'
  | 'EXCECAO_BASE_ZERO'

export interface BaseZeroJustification {
  id: string
  category: JustificationCategory
  reason: string
  evidenceLinks?: string[]
  createdAt: string
  createdBy: string
}

export interface JustificationRequirement {
  category: JustificationCategory
  required: boolean
  minLength: number
}

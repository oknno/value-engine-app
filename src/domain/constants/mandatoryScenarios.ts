export const MANDATORY_SCENARIOS = [
  'REABERTURA_COMPETENCIA',
  'OVERRIDE_FLUXO',
  'APROVACAO_FORA_PADRAO',
  'EXCECAO_BASE_ZERO',
] as const

export type MandatoryScenario = (typeof MANDATORY_SCENARIOS)[number]

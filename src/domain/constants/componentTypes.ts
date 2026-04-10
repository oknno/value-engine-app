export const COMPONENT_TYPES = [
  'RECEITA',
  'CUSTO',
  'INVESTIMENTO',
  'ALOCACAO',
  'CONVERSAO',
] as const

export type ComponentType = (typeof COMPONENT_TYPES)[number]

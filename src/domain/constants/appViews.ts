export const APP_VIEWS = [
  'Iniciativas',
  'Componentes',
  'Inputs',
  'Conversões',
  'Custos',
  'Aprovação',
  'Resultados',
  'Controle de Fechamento',
  'Justificativas',
  'Auditoria',
] as const

export type AppView = (typeof APP_VIEWS)[number]

export const APP_VIEW_COPY: Record<AppView, string> = {
  Iniciativas: 'Cadastro e priorização das iniciativas estratégicas de valor.',
  Componentes: 'Gestão dos componentes que estruturam cada iniciativa.',
  Inputs: 'Entrada e validação dos dados necessários para processamento.',
  Conversões: 'Parâmetros de conversão aplicados na transformação de valores.',
  Custos: 'Consolidação dos custos e rateios vinculados às iniciativas.',
  Aprovação: 'Fluxo de aprovação interno com trilha de decisão.',
  Resultados: 'Visualização dos resultados consolidados e indicadores.',
  'Controle de Fechamento': 'Checklist e status do fechamento mensal do ciclo.',
  Justificativas: 'Registro das justificativas para variações e exceções.',
  Auditoria: 'Rastreabilidade de alterações, eventos e evidências do processo.',
}

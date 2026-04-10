export const KPI_DIRECTIONS = ['UP', 'DOWN'] as const

export type KpiDirection = (typeof KPI_DIRECTIONS)[number]

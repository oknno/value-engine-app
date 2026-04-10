import { buildListService } from './baseListService'

export const COST_MONTHLY_LIST_TITLE = 'CostMonthly'
export const costMonthlyService = buildListService(COST_MONTHLY_LIST_TITLE, 'SP.Data.CostMonthlyListItem')

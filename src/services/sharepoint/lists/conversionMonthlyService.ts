import { buildListService } from './baseListService'

export const CONVERSION_MONTHLY_LIST_TITLE = 'ConversionMonthly'
export const conversionMonthlyService = buildListService(CONVERSION_MONTHLY_LIST_TITLE, 'SP.Data.ConversionMonthlyListItem')

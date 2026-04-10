import {
  mapConversionMonthlyFromSharePoint,
  mapConversionMonthlyToSharePoint,
  type ConversionMonthlyContract,
  type SharePointConversionMonthlyFields,
} from '../../../lib/sharepoint/mappers/conversionMonthlyMapper'
import { buildListService, type ListItemsQuery } from './baseListService'

export const CONVERSION_MONTHLY_LIST_TITLE = 'ConversionMonthly'

const baseConversionMonthlyService = buildListService(
  CONVERSION_MONTHLY_LIST_TITLE,
  'SP.Data.ConversionMonthlyListItem',
)

export const conversionMonthlyService = {
  ...baseConversionMonthlyService,

  async getContracts(query: ListItemsQuery): Promise<ConversionMonthlyContract[]> {
    const items = await baseConversionMonthlyService.getItems<SharePointConversionMonthlyFields>(query)
    return items.map(mapConversionMonthlyFromSharePoint)
  },

  async createContract(contract: ConversionMonthlyContract) {
    return baseConversionMonthlyService.createItem<SharePointConversionMonthlyFields>(
      mapConversionMonthlyToSharePoint(contract),
    )
  },

  async updateContract(id: number, contract: Partial<ConversionMonthlyContract>) {
    const mapped = mapConversionMonthlyToSharePoint(contract as ConversionMonthlyContract)
    return baseConversionMonthlyService.updateItem<SharePointConversionMonthlyFields>(id, mapped)
  },
}

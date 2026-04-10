import {
  mapAuditLogFromSharePoint,
  mapAuditLogToSharePoint,
  type AuditLogContract,
  type SharePointAuditLogFields,
} from '../../../lib/sharepoint/mappers/auditLogMapper'
import { buildListService, type ListItemsQuery } from './baseListService'

export const AUDIT_LOG_LIST_TITLE = 'AuditLog'

const baseAuditLogService = buildListService(AUDIT_LOG_LIST_TITLE, 'SP.Data.AuditLogListItem')

export const auditLogService = {
  ...baseAuditLogService,

  async getContracts(query: ListItemsQuery): Promise<AuditLogContract[]> {
    const items = await baseAuditLogService.getItems<SharePointAuditLogFields>(query)
    return items.map(mapAuditLogFromSharePoint)
  },

  async createContract(contract: AuditLogContract) {
    return baseAuditLogService.createItem<SharePointAuditLogFields>(mapAuditLogToSharePoint(contract))
  },

  async updateContract(id: number, contract: Partial<AuditLogContract>) {
    const mapped = mapAuditLogToSharePoint(contract as AuditLogContract)
    return baseAuditLogService.updateItem<SharePointAuditLogFields>(id, mapped)
  },
}

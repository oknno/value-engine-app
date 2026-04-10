import { buildListService } from './baseListService'

export const AUDIT_LOG_LIST_TITLE = 'AuditLog'
export const auditLogService = buildListService(AUDIT_LOG_LIST_TITLE, 'SP.Data.AuditLogListItem')

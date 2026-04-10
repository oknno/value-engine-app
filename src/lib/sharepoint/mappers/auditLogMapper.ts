import type { SharePointItem } from '../../../domain/types/entities'
import type { AuditActionType, AuditEntityType } from '../../../domain/types/audit'
import { mapperParsers } from './shared'

export interface SharePointAuditLogFields {
  OccurredAt: string
  EntityType: AuditEntityType
  EntityId: string
  Action: AuditActionType
  ActorUserId: string
  ActorDisplayName: string
  ActorRole: string
  MetadataJson?: string
}

export interface AuditLogContract {
  id: string
  occurredAt: string
  entityType: AuditEntityType
  entityId: string
  action: AuditActionType
  actorUserId: string
  actorDisplayName: string
  actorRole: string
  metadataJson?: string
}

export const mapAuditLogFromSharePoint = (
  item: SharePointItem<SharePointAuditLogFields>,
): AuditLogContract => ({
  id: String(item.id),
  occurredAt: mapperParsers.asString(item.fields.OccurredAt),
  entityType: item.fields.EntityType,
  entityId: mapperParsers.asString(item.fields.EntityId),
  action: item.fields.Action,
  actorUserId: mapperParsers.asString(item.fields.ActorUserId),
  actorDisplayName: mapperParsers.asString(item.fields.ActorDisplayName),
  actorRole: mapperParsers.asString(item.fields.ActorRole),
  metadataJson: item.fields.MetadataJson,
})

export const mapAuditLogToSharePoint = (contract: AuditLogContract): SharePointAuditLogFields => ({
  OccurredAt: contract.occurredAt,
  EntityType: contract.entityType,
  EntityId: contract.entityId,
  Action: contract.action,
  ActorUserId: contract.actorUserId,
  ActorDisplayName: contract.actorDisplayName,
  ActorRole: contract.actorRole,
  MetadataJson: contract.metadataJson,
})

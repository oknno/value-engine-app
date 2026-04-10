import type { SharePointItem } from '../../../domain/types/entities'
import { mapperParsers } from './shared'

export interface SharePointComponentFields {
  ComponentCode: string
  ComponentName: string
  ComponentType: string
  IsActive: boolean
}

export interface ComponentContract {
  id: string
  code: string
  name: string
  type: string
  isActive: boolean
}

export const mapComponentFromSharePoint = (
  item: SharePointItem<SharePointComponentFields>,
): ComponentContract => ({
  id: String(item.id),
  code: mapperParsers.asString(item.fields.ComponentCode),
  name: mapperParsers.asString(item.fields.ComponentName),
  type: mapperParsers.asString(item.fields.ComponentType),
  isActive: mapperParsers.asBoolean(item.fields.IsActive),
})

export const mapComponentToSharePoint = (contract: ComponentContract): SharePointComponentFields => ({
  ComponentCode: contract.code,
  ComponentName: contract.name,
  ComponentType: contract.type,
  IsActive: contract.isActive,
})

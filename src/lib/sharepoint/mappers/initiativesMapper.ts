import type { SharePointItem } from '../../../domain/types/entities'
import { mapperParsers } from './shared'

export interface SharePointInitiativeFields {
  InitiativeCode: string
  InitiativeName: string
  OwnerUserId: string
  IsActive: boolean
}

export interface InitiativeContract {
  id: string
  code: string
  name: string
  ownerUserId: string
  isActive: boolean
}

export const mapInitiativeFromSharePoint = (
  item: SharePointItem<SharePointInitiativeFields>,
): InitiativeContract => ({
  id: String(item.id),
  code: mapperParsers.asString(item.fields.InitiativeCode),
  name: mapperParsers.asString(item.fields.InitiativeName),
  ownerUserId: mapperParsers.asString(item.fields.OwnerUserId),
  isActive: mapperParsers.asBoolean(item.fields.IsActive),
})

export const mapInitiativeToSharePoint = (
  contract: InitiativeContract,
): SharePointInitiativeFields => ({
  InitiativeCode: contract.code,
  InitiativeName: contract.name,
  OwnerUserId: contract.ownerUserId,
  IsActive: contract.isActive,
})

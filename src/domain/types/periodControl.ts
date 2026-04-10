import type { PeriodStatus } from '../constants/status'

export interface CompetencePeriod {
  id: string
  reference: string
  startsAt: string
  endsAt: string
  status: PeriodStatus
}

export interface ReopenPeriodRequest {
  periodId: string
  justificationId: string
  requestedBy: string
}

export interface PeriodWindow {
  opensAt: string
  closesAt: string
}

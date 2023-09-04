import { FC } from 'react'

interface DashboardItem {
  path: string
  label: string
  icon: FC
}

interface DashboardCrudItem extends DashboardItem {
  listComponent: FC
  formComponent: FC
}

export type DashboardItems = Array<DashboardCrudItem>

export interface DashboardMenuProps {
  dashboardItems: DashboardItems
}

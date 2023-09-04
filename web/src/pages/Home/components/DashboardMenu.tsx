import { Drawer, List } from '@mui/material'
import { useDashboardMenuStyle } from '../styles/dashboardMenuStyle'
import { DashboardMenuProps } from '../types'
import { DrawerListItem } from './DrawerListItem'

export const DashboardMenu = ({ dashboardItems }: DashboardMenuProps) => {
  const dashboardMenuStyle = useDashboardMenuStyle()

  return (
    <Drawer variant="permanent" anchor="left">
      <List className={dashboardMenuStyle.menuWidth}>
        {dashboardItems.map((item, index) => (
          <DrawerListItem key={index} path={item.path} icon={item.icon} />
        ))}
      </List>
    </Drawer>
  )
}

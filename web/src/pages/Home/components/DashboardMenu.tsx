import { Logout } from '@mui/icons-material'
import { Drawer, List, ListItem } from '@mui/material'
import { useAuth } from '../../../hooks/useAuth'
import { useDashboardMenuStyle } from '../styles/dashboardMenuStyle'
import { DashboardMenuProps } from '../types'
import { DrawerListItem } from './DrawerListItem'
import { DrawerListItemButton } from './DrawerListItemButton'

export const DashboardMenu = ({ dashboardItems }: DashboardMenuProps) => {
  const dashboardMenuStyle = useDashboardMenuStyle()
  const auth = useAuth()

  function handleOnLogout() {
    return auth.logoutUser()
  }

  return (
    <Drawer variant="permanent" anchor="left">
      <List className={dashboardMenuStyle.menuWidth}>
        {dashboardItems.map((item, index) => (
          <DrawerListItem key={index} path={item.path} icon={item.icon} />
        ))}
      </List>
      <List>
        <ListItem disablePadding>
          <DrawerListItemButton icon={Logout} onClick={handleOnLogout} />
        </ListItem>
      </List>
    </Drawer>
  )
}

import { Box } from '@mui/material'
import { ReactNode } from 'react'
import { DashboardMenu } from './components/DashboardMenu'
import { dashboardItems } from './dashboardItems'
import { useDashboardMenuStyle } from './styles/dashboardMenuStyle'

interface HomeProps {
  children: ReactNode
}

export const Home = ({ children }: HomeProps) => {
  const dashboardMenuStyle = useDashboardMenuStyle()

  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="nav" className={dashboardMenuStyle.menuWidth}>
        <DashboardMenu dashboardItems={dashboardItems} />
      </Box>
      <Box component="main" sx={{ flexGrow: 1, height: '97vh' }}>
        {children}
      </Box>
    </Box>
  )
}

import { Facebook } from '@mui/icons-material'
import { TestComponent } from '../Test'
import { DashboardItems } from './types'

export const dashboardItems: DashboardItems = [
  {
    path: 'teste',
    label: 'Teste',
    icon: Facebook,
    formComponent: TestComponent,
    listComponent: TestComponent,
  },
]

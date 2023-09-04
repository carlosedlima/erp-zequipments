import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { Home } from './pages/Home'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Home>
          <AppRoutes />
        </Home>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

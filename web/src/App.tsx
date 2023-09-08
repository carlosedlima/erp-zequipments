import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { ContextsHandler } from './contexts/ContextsHandler'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextsHandler>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ContextsHandler>
    </ThemeProvider>
  )
}

export default App

import { ReactNode } from 'react'
import { APIContextProvider } from './APIContext'
import { AuthContextProvider } from './AuthContext'
import { SnackbarContextProvider } from './SnackbarContext'

interface ContextsHandlerProps {
  children: ReactNode
}

export const ContextsHandler = ({ children }: ContextsHandlerProps) => {
  return (
    <SnackbarContextProvider>
      <AuthContextProvider>
        <APIContextProvider>{children}</APIContextProvider>
      </AuthContextProvider>
    </SnackbarContextProvider>
  )
}

import { ReactNode, createContext, useState } from 'react'
import { SnackbarContextType } from './snackbarContextTypes'

export const SnackbarContext = createContext<SnackbarContextType>(
  {} as SnackbarContextType
)

export const SnackbarContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [snackbarMessage, setSnackbarMessage] = useState<Nullable<string>>(null)

  const contextValues: SnackbarContextType = {
    snackbarMessage,
    setSnackbarMessage,
  }

  return (
    <SnackbarContext.Provider value={contextValues}>
      {children}
    </SnackbarContext.Provider>
  )
}

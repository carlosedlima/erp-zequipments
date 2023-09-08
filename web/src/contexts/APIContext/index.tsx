import { ReactNode, createContext, useState } from 'react'
import { ApiContextType } from './apiContextTypes'

export const APIContext = createContext<ApiContextType>({} as ApiContextType)

export const APIContextProvider = ({ children }: { children: ReactNode }) => {
  const [apiIsLoading, setApiIsLoading] = useState(false)

  const contextValues: ApiContextType = {
    apiIsLoading,
    setApiIsLoading,
  }

  return (
    <APIContext.Provider value={contextValues}>{children}</APIContext.Provider>
  )
}

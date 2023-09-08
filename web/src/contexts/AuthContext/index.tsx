import { ReactNode, createContext, useState } from 'react'
import { AuthContextType, UserData } from './authContextTypes'

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<Nullable<UserData>>(null)

  const contextValues: AuthContextType = {
    userData,
    setUserData,
  }

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  )
}

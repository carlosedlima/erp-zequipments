import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { UserData } from '../contexts/AuthContext/authContextTypes'

export const useAuth = () => {
  const AUTH_STORAGE_KEY = 'credentials'
  const authContext = useContext(AuthContext)

  function getUserData() {
    if (!authContext.userData) {
      const localStorageUser = localStorage.getItem(AUTH_STORAGE_KEY)

      if (localStorageUser) {
        const localStorageUserToObject: UserData = JSON.parse(localStorageUser)
        authContext.setUserData(localStorageUserToObject)
        return localStorageUserToObject
      }
    }

    return authContext.userData
  }

  function loginUser(user: UserData) {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
    return authContext.setUserData(user)
  }

  function logoutUser() {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    return authContext.setUserData(null)
  }

  return {
    getUserData,
    loginUser,
    logoutUser,
  }
}

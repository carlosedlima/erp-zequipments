import { Dispatch } from 'react'

export type UserData = {
  username: string
  email: string
  token: string
}

export type AuthContextType = {
  userData: Nullable<UserData>
  setUserData: Dispatch<React.SetStateAction<Nullable<UserData>>>
}

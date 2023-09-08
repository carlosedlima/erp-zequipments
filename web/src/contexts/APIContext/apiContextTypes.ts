import { Dispatch } from 'react'

export type ApiContextType = {
  apiIsLoading: boolean
  setApiIsLoading: Dispatch<React.SetStateAction<boolean>>
}

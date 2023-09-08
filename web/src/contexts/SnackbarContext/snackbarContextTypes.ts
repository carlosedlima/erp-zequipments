import { Dispatch } from 'react'

export type SnackbarContextType = {
  snackbarMessage: Nullable<string>
  setSnackbarMessage: Dispatch<React.SetStateAction<Nullable<string>>>
}

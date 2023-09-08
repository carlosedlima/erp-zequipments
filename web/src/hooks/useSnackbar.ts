import { useContext } from 'react'
import { SnackbarContext } from '../contexts/SnackbarContext'

export const useSnackbar = () => {
  const snackbarContext = useContext(SnackbarContext)

  return snackbarContext
}

import { ApiResponse, ApisauceConfig, create } from 'apisauce'
import { useCallback, useContext } from 'react'
import { APIContext } from '../contexts/APIContext'
import { useAuth } from './useAuth'
import { useSnackbar } from './useSnackbar'

export const useAPI = () => {
  const apiContext = useContext(APIContext)
  const auth = useAuth()
  const snackbar = useSnackbar()

  function handleAPIErrors(response: ApiResponse<unknown>) {
    if (!response.ok) {
      switch (response.problem) {
        case 'NETWORK_ERROR':
          return snackbar.setSnackbarMessage('Network not available')
        case 'CONNECTION_ERROR':
          return snackbar.setSnackbarMessage('Server not available, bad dns')
        case 'TIMEOUT_ERROR':
          return snackbar.setSnackbarMessage("Server didn't respond in time")
        case 'SERVER_ERROR':
          return snackbar.setSnackbarMessage('Occured a unexpected error')
        default:
          return
      }
    }
  }

  const createAPIInstance = useCallback(
    (apiConfig: ApisauceConfig) => {
      const loggedUser = auth.getUserData()

      const apiInstance = create(apiConfig)

      apiInstance.addResponseTransform(handleAPIErrors)

      apiInstance.addAsyncRequestTransform(async () =>
        apiContext.setApiIsLoading(true)
      )
      apiInstance.addAsyncResponseTransform(async () =>
        apiContext.setApiIsLoading(false)
      )

      if (loggedUser) {
        apiInstance.setHeader('Authorization', `Bearer ${loggedUser.token}`)
      }

      return apiInstance
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [auth, apiContext]
  )

  return {
    ...apiContext,
    createAPIInstance,
  }
}

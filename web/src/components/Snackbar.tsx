import CloseIcon from '@mui/icons-material/Close'
import { IconButton, Snackbar as MUISnackbar } from '@mui/material'
import { Fragment, useMemo } from 'react'
import { useSnackbar } from '../hooks/useSnackbar'

export const Snackbar = () => {
  const snackbarHook = useSnackbar()

  const open = useMemo(() => {
    return Boolean(snackbarHook.snackbarMessage)
  }, [snackbarHook.snackbarMessage])

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    snackbarHook.setSnackbarMessage(null)
  }

  const handleExited = () => snackbarHook.setSnackbarMessage(null)

  return (
    <MUISnackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      TransitionProps={{ onExited: handleExited }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      message={snackbarHook.snackbarMessage}
      action={
        <Fragment>
          <IconButton
            aria-label="close"
            color="inherit"
            sx={{ p: 0.5 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </Fragment>
      }
    />
  )
}

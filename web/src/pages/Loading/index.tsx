import { Box, CircularProgress } from '@mui/material'

export const Loading = () => {
  return (
    <Box
      sx={{
        padding: '40vh',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress size={'17vh'} />
    </Box>
  )
}

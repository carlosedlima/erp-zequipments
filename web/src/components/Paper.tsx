import { Paper as MUIPaper } from '@mui/material'
import { grey } from '@mui/material/colors'
import { styled } from '@mui/material/styles'

export const Paper = styled(MUIPaper)({
  backgroundColor: grey[50],
  minWidth: '980px',
  padding: '4rem',
  borderRadius: '20px',
})

import { Box, Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const NotFound = () => (
  <Box sx={{ height: '100%' }}>
    <Grid
      container
      alignContent="center"
      justifyContent="center"
      spacing={4}
      sx={{ height: '100%' }}
    >
      <Grid
        item
        container
        alignContent="center"
        justifyContent="center"
        xs={12}
      >
        <Typography variant="h4">Página não encontrada</Typography>
      </Grid>
      <Grid
        item
        container
        alignContent="center"
        justifyContent="center"
        xs={12}
      >
        <Button component={Link} to="/" variant="contained">
          Voltar para a página inicial
        </Button>
      </Grid>
    </Grid>
  </Box>
)

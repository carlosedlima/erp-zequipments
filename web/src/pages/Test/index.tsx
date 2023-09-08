import { Box, Button, Grid } from '@mui/material'
import { useState } from 'react'
import { useSnackbar } from '../../hooks/useSnackbar'
import { useAnimePicsAPI } from '../../services/animePicsAPI'

type AnimeAPIResponse = {
  url: string
}

export const TestComponent = () => {
  const animePicsAPI = useAnimePicsAPI()
  const snackbar = useSnackbar()

  const [animeImageURL, setAnimeImageURL] = useState<Nullable<string>>(null)

  async function handleSearchAnimePic() {
    const response = await animePicsAPI.get<AnimeAPIResponse>('/sfw/cringe')

    if (response.ok && response.data) {
      return setAnimeImageURL(response.data.url)
    }

    return snackbar.setSnackbarMessage(
      'An error occurred when calling Anime Pics API'
    )
  }

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSearchAnimePic}>
            Search Random Anime Image
          </Button>
        </Grid>
        {animeImageURL && (
          <Grid item xs={12}>
            <img
              src={animeImageURL}
              style={{ width: '480px', height: '220px' }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

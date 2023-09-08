import { Box, Button, Grid, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { Paper } from '../../components/Paper'
import { TextFormikInput } from '../../components/formik/TextFormikInput'
import { useAuth } from '../../hooks/useAuth'
import { LoginForm } from './loginTypes'
import { loginValidationSchema } from './loginValidation'

export const Login = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  function handleSubmit(data: LoginForm) {
    auth.loginUser({
      username: data.username!,
      email: data.username!,
      token: data.password!,
    })

    navigate('/')
  }

  return (
    <Box p="30vh">
      <Paper>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Grid container spacing={4}>
              <Grid item xs={12} container justifyContent="center">
                <Typography variant="h3">Login</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextFormikInput name="username" label="Login" />
              </Grid>
              <Grid item xs={12}>
                <TextFormikInput name="password" label="Senha" />
              </Grid>
              <Grid item xs={12} container justifyContent="center">
                <Button type="submit" variant="contained">
                  Login
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Paper>
    </Box>
  )
}

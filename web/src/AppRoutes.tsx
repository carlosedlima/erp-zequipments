import { Fragment, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { Home } from './pages/Home'
import { dashboardItems } from './pages/Home/dashboardItems'
import { Login } from './pages/Login'
import { LoginRedirect } from './pages/LoginRedirect'
import { NotFound } from './pages/NotFound'

export const AppRoutes = () => {
  const auth = useAuth()

  const userIsLogged = useMemo(() => {
    return auth && Boolean(auth.getUserData())
  }, [auth])

  if (userIsLogged)
    return (
      <Home>
        <Routes>
          <Route path="/" element={<Fragment>Home Page</Fragment>} />
          {dashboardItems.map((item, index) => (
            <Fragment key={index}>
              <Route path={item.path} element={<item.listComponent />} />
              <Route
                path={`${item.path}/:id`}
                element={<item.formComponent />}
              />
              <Route
                path={`${item.path}/novo`}
                element={<item.formComponent />}
              />
            </Fragment>
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Home>
    )

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<LoginRedirect />} />
    </Routes>
  )
}

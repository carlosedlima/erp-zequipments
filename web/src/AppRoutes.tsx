import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { dashboardItems } from './pages/Home/dashboardItems'
import { NotFound } from './pages/NotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Fragment>Home Page</Fragment>} />
      {dashboardItems.map((item, index) => (
        <Fragment key={index}>
          <Route path={item.path} element={<item.listComponent />} />
          <Route path={`${item.path}/:id`} element={<item.formComponent />} />
          <Route path={`${item.path}/novo`} element={<item.formComponent />} />
        </Fragment>
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

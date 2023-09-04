import React, { FC } from 'react'
import { Route } from 'react-router-dom'

interface CRUDRouterProps {
  path: string
  listComponent: FC
  formComponent: FC
}

export const CRUDRouter = (props: CRUDRouterProps) => (
  <React.Fragment>
    <Route path={props.path} element={<props.listComponent />} />
    <Route path={`${props.path}/:id`} element={<props.formComponent />} />
    <Route path={`${props.path}/novo`} element={<props.formComponent />} />
  </React.Fragment>
)

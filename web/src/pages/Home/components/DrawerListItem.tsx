import { ListItem } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { DrawerListItemButton } from './DrawerListItemButton'

interface DrawerListItemProps {
  path: string
  icon: FC
}

export const DrawerListItem = (props: DrawerListItemProps) => {
  return (
    <ListItem disablePadding>
      <Link to={props.path}>
        <DrawerListItemButton icon={props.icon} />
      </Link>
    </ListItem>
  )
}

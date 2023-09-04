import { ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface DrawerListItemProps {
  path: string
  icon: FC
}

export const DrawerListItem = (props: DrawerListItemProps) => {
  return (
    <ListItem disablePadding>
      <Link to={props.path}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 'auto',
              justifyContent: 'center',
            }}
          >
            <props.icon />
          </ListItemIcon>
        </ListItemButton>
      </Link>
    </ListItem>
  )
}

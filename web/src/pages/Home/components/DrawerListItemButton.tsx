import { ListItemButton, ListItemIcon } from '@mui/material'
import { FC, MouseEventHandler } from 'react'

interface DrawerListItemButtonProps {
  icon: FC
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const DrawerListItemButton = (props: DrawerListItemButtonProps) => {
  return (
    <ListItemButton
      onClick={props.onClick}
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
  )
}

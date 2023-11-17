import { Menu, MenuItem } from '@mui/material'
import React from 'react'

function MainMenu({ anchorEl, open, onClose }) {

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose} >
        <MenuItem onClick={onClose} >nested</MenuItem>
    </Menu>
  )
}

export default MainMenu
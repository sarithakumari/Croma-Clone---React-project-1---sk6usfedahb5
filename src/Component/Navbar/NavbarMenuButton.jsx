import { IconButton, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function NavbarMenuButton({open, handleMenuOpen}) {
  return (
    <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open-menu"
        onClick={handleMenuOpen}
      >
        {open ? <CloseIcon /> : <MenuIcon />}

        <Typography >menu</Typography>
      </IconButton>
  )
}

export default NavbarMenuButton
import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";



function NavbarMenu() {
  return (
    
    <Toolbar style={{
        padding: "auto 0px"
      }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        // sx={{ mr: 2 }}
      >
        <MenuIcon />
        <Typography>menu</Typography>
      </IconButton>

    </Toolbar>

  )
}

export default NavbarMenu;
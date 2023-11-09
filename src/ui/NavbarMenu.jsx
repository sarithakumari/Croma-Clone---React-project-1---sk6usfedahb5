import React, { useState } from 'react';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { Menu, MenuItem } from '@mui/material';
import { categories } from '../../public/categories';
import { Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";



function NavbarMenu() {
  const [menuClick, setMenuClick] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleMenuOpen(e) {
    setMenuClick(true);
    setAnchorEl(e.currentTarget);
  }

  function handleMenuClose(e) {
    setAnchorEl(null);
    setMenuClick(false);
  }

  console.log("menuclick", menuClick);
  console.log(categories);

  return (
    
    <Toolbar style={{
        padding: "auto 0px"
      }}>

      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleMenuOpen}
      >
        {menuClick ? (<CloseIcon />) : (<MenuIcon />)}
        
        <Typography>menu</Typography>
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose} >
      <Typography>Shop by Categories</Typography>
      {categories.map((category) => (
        <Link key={category.id} component={RouterLink} to={`/${category.path}`} style={{textDecoration: "none", color: "inherit"}} >
          <MenuItem onClick={handleMenuClose} >{category.name}</MenuItem>
        </Link>
      ))}
        
        {/* <MenuItem onClick={handleMenuClose} >Electronics</MenuItem> */}

      </Menu>

    </Toolbar>

  )
}

export default NavbarMenu;
import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Menu, MenuItem } from "@mui/material";
import { categories } from "../../public/categories";
import { Link } from "@mui/material";
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
    <Toolbar
      style={{
        padding: "auto 0px",
      }}
    >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open-menu"
        onClick={handleMenuOpen}
      >
        {menuClick ? <CloseIcon /> : <MenuIcon />}

        <Typography>menu</Typography>
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>

        <Typography style={{height: "60px", padding: "1rem"}}>Shop by Categories</Typography>

        {categories.map((category) => (
          // no need of link element here as navigation to other route can be handled in handleMenuClose function
          <Link
            key={category.id}
            component={RouterLink}
            to={`/${category.path}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem onClick={handleMenuClose}
              style={{
              display: "flex",
              width: "400px",
              height: "40px",
              alignItems: "center",
              justifyContent: "space-between",
              // backgroundColor: "black",
              // color: "white"
                }}>
              <Typography >{category.name}</Typography>
              <div>
                <KeyboardArrowRightIcon  />
              </div>
            </MenuItem>
          </Link>
        ))}

      </Menu>
    </Toolbar>
  );
}

export default NavbarMenu;

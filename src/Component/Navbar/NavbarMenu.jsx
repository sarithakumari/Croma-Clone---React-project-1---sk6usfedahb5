import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Menu, MenuItem } from "@mui/material";
import { categories } from "../../../public/categories";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";
import NavbarMenuButton from "./NavbarMenuButton";
import MainMenu from "./MainMenu";

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiList-root': {
    backgroundColor: "#090909",
    color: "white",
    // '&:hover .MuiTypography-root': {
    //   backgroundColor: "grey"
    // }
  },
}))

// const StyledMenuItem = styled(MenuItem)(({ theme })=> ({
//   '&:hover .MuiTypography-root': {
//     backgroundColor: "grey",
//   }
// }))

const StyledLink = styled(Link)(({ theme }) => ({
  '&:hover .MuiButtonBase-root': {
    backgroundColor: "#12DAA8",
    color: "black"
  }
}))

function NavbarMenu() {
  // const [menuClick, setMenuClick] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleMenuOpen(e) {
    // setMenuClick(true);
    setAnchorEl(e.currentTarget);
  }

  function handleMenuClose(e) {
    setAnchorEl(null);
    // setMenuClick(false);
  }

  // console.log("menuclick", menuClick);
  // console.log(categories);

  return (
    <Toolbar
      style={{
        padding: "auto 0px",
      }}
    >
      <NavbarMenuButton key="navbarmenuBtn" open={open}  handleMenuOpen={handleMenuOpen} />
      {/* <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open-menu"
        onClick={handleMenuOpen}
      >
        {menuClick ? <CloseIcon /> : <MenuIcon />}

        <Typography>menu</Typography>
      </IconButton> */}

      {/* <MainMenu anchorEl={anchorEl} open={open} onClose={handleMenuClose} /> */}

      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleMenuClose}  >

        <Typography style={{height: "60px", padding: "1rem"}}>Shop by Categories</Typography>

        {categories.map((category) => (
          // no need of link element here as navigation to other route can be handled in handleMenuClose function
          <StyledLink
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
              <Typography >{category.label}</Typography>
              <div style={{display: "flex" }}>
                <KeyboardArrowRightIcon  />
              </div>
            </MenuItem>
          </StyledLink>
        ))}

      </StyledMenu>

    </Toolbar>
  );
}

export default NavbarMenu;



/*
NOT necessary:

exclusive at croma
top brands
croma store locator
gift card

*/ 
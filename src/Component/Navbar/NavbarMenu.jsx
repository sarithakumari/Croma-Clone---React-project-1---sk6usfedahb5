import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Menu, MenuItem } from "@mui/material";
import { categories } from "../../../public/categories";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";
import NavbarMenuButton from "./NavbarMenuButton";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiList-root": {
    backgroundColor: "#090909",
    color: "white",
  },
}));

// const StyledMenuItem = styled(MenuItem)(({ theme })=> ({
//   '&:hover .MuiTypography-root': {
//     backgroundColor: "grey",
//   }
// }))

const StyledLink = styled(Link)(({ theme }) => ({
  "&:hover .MuiButtonBase-root": {
    backgroundColor: "#12DAA8",
    color: "black",
  },
}));

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
      sx={{
        padding: "auto 0px",
        display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
        order: {lg: "1", md: "1", sm: "", xs: "" }
      }}
    >
      <NavbarMenuButton
        key="navbarmenuBtn"
        open={open}
        handleMenuOpen={handleMenuOpen}
      />
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

      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <Typography style={{ height: "60px", padding: "1rem" }}>
          Shop by Categories
        </Typography>

        {categories.map((category) => (
          // no need of link element here as navigation to other route can be handled in handleMenuClose function
          <StyledLink
            key={category.id}
            component={RouterLink}
            to={`/${category.path}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem
              onClick={handleMenuClose}
              style={{
                display: "flex",
                width: "400px",
                height: "40px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>{category.label}</Typography>
              <div style={{ display: "flex" }}>
                <KeyboardArrowRightIcon />
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

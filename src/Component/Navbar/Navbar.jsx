import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import NavbarMenu from "../../ui/NavbarMenu";
import NavbarSearch from "../../ui/NavbarSearch";


export default function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar
          style={{
            width: "100%",
            padding: "0"
          }}
        >
          <Toolbar style={{
            padding: "0",
            
          }}>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Switzer",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              croma
            </Typography>
          </Toolbar>

          <NavbarMenu />

          <NavbarSearch />

          {/* for search, location and cart */}
          
          {/*  */}


          
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </Box>
  );
}

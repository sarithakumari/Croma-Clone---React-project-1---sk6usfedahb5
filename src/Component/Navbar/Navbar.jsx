import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavbarMenu from "../../ui/NavbarMenu";
import NavbarSearch from "../../ui/NavbarSearch";
import NavbarLogo from "../../ui/NavbarLogo";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar style={{ width: "100%", padding: "0" }}>
          <NavbarLogo />

          <NavbarMenu />

          <NavbarSearch />
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </Box>
  );
}

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import NavbarMenu from "../../ui/NavbarMenu";
import NavbarSearch from "../../ui/NavbarSearch";
import NavbarLogo from "../../ui/NavbarLogo";
import Container from "@mui/material/Container";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "black" }}>
        <Container maxWidth="lg">
          <Toolbar style={{ width: "100%", padding: "0" }}>
            <NavbarLogo />

            <NavbarMenu />

            <NavbarSearch />
          </Toolbar>
        </Container>
      </AppBar>

    </Box>
  );
}


/* {renderMobileMenu} */
/* {renderMenu} */
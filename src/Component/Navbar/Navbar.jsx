import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import NavbarMenu from "./NavbarMenu";
import NavbarSearch from "./NavbarSearch";
import NavbarLogo from "./NavbarLogo";
import Container from "@mui/material/Container";
import { useLocation } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";
import NavbarCheckoutButtons from "../Checkout/NavbarCheckoutButtons";

export default function Navbar() {
  const location = useLocation();
  const isCheckoutPath = Boolean(location.pathname == "/checkout");
  console.log(location.pathname);
  console.log(isCheckoutPath);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "black" }}>
        <Container maxWidth="lg">
          <Toolbar style={{ width: "100%", padding: "0" }}>
            <NavbarLogo />

            {!isCheckoutPath && <NavbarMenu />}

            {!isCheckoutPath && <NavbarSearch />}

            {isCheckoutPath && <NavbarCheckoutButtons />}
            
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

/* {renderMobileMenu} */
/* {renderMenu} */

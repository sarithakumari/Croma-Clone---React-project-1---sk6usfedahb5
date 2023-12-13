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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
  const location = useLocation();
  const isCheckoutPath = Boolean(location.pathname == "/checkout");
  const isPaymentPath = Boolean(location.pathname == "/payment");
  // console.log(location.pathname);
  // console.log(isCheckoutPath);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "black" }} sx={{"& .toastPosition": {bottom: "3.5rem", zIndex: "9999"}}}>
        <Container maxWidth="lg">
          <Toolbar style={{ width: "100%", padding: "0" }}>
            <NavbarLogo />

            <ToastContainer
              className="toastPosition"
              position="bottom-center"
              autoClose={500}
              limit={2}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              draggable
              theme="light"
            />

            {!isCheckoutPath && !isPaymentPath && <NavbarMenu />}

            {!isCheckoutPath && !isPaymentPath && <NavbarSearch />}

            {(isCheckoutPath || isPaymentPath) && <NavbarCheckoutButtons />}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

/* {renderMobileMenu} */
/* {renderMenu} */

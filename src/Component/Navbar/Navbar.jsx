import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import NavbarMenu from "./NavbarMenu";
import NavbarSearch from "./NavbarSearch";
import NavbarLogo from "./NavbarLogo";
import Container from "@mui/material/Container";
import { useLocation } from "react-router-dom";
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
      <AppBar
        position="fixed"
        sx={{
          "& .toastPosition": {
            left: { lg: "50%", md: "50%", sm: "3rem", xs: "2.8rem" },
            bottom: "3.5rem",
            zIndex: "9999",
            width: "300px",
          },
          backgroundColor: "black"
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ width: "100%", padding: "0", flexWrap: "wrap" }}>
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
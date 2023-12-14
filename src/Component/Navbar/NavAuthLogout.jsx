import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { toast } from 'react-toastify';

function NavAuthLogout() {

  function handleAuthLogout() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("username");
    toast.info("Logged Out");
  }

  return (
    <Box component="div">
      <Box component='div' sx={{ backgroundColor: "transparent", color: "inherit", }} onClick={handleAuthLogout} >
        <Typography component="p" textTransform="capitalize">Logout</Typography>
        <Typography
          component="p"
          sx={{ fontSize: "0.75rem", marginTop: "0.2rem" }}
        >
          Most Welcome to come back later!!
        </Typography>
      </Box>
    </Box>
  );
}

export default NavAuthLogout;

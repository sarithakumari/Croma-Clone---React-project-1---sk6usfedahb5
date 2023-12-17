import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { toast } from 'react-toastify';
import CromaContext from "../../ContextAPI/CromaContext";

function NavAuthLogout() {
  const { handleSetUserToken } = useContext(CromaContext);

  function handleAuthLogout() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("username");
    handleSetUserToken(null);
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

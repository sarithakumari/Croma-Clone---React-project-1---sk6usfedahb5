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
      <Button sx={{ backgroundColor: "transparent", color: "inherit", }} onClick={handleAuthLogout} >
        <Typography component="p" textTransform="capitalize">Logout</Typography>
      </Button>
    </Box>
  );
}

export default NavAuthLogout;

import { Box, Button, Typography } from "@mui/material";
import React from "react";

function NavAuthLogout() {

  function handleAuthLogout() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("username");
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

import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import CromaContext from "../../ContextAPI/CromaContext";

function NavAuthAccount() {
  const { handleOpenAuthDialog } = useContext(CromaContext);
  return (
    <Box component="div">
      <Box component='div'
        sx={{ backgroundColor: "transparent", color: "inherit" }}
        onClick={handleOpenAuthDialog}
      >
        <Typography component="p" textTransform="capitalize">
          Sign Up/Login
        </Typography>
        <Typography
          component="p"
          sx={{ fontSize: "0.75rem", marginTop: "0.2rem" }}
        >
          New to Croma ? Create Account here
        </Typography>
      </Box>
    </Box>
  );
}

export default NavAuthAccount;

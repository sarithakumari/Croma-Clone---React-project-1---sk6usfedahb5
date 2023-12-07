import { Box } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";

function NavbarAuthentication() {
  return (
    <Box
      style={{
        marginRight: "20px",
        cursor: "pointer",
      }}
      onClick={() => alert("sign-in/sign-up modal")}
    >
      <PersonIcon style={{ fontSize: "25px" }} />
    </Box>
  );
}

export default NavbarAuthentication;

import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function NavbarLogo() {
  return (
    <>
      <Toolbar
        style={{
          padding: "0",
        }}
      >
        <Typography
          variant="h4"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "Switzer",
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          croma
        </Typography>
      </Toolbar>
    </>
  );
}

export default NavbarLogo;

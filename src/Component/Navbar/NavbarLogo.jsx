import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function NavbarLogo() {
  return (
    <>
      {/* <Toolbar
        style={{
          padding: "0",
        }}
      > */}
      <Link
        component={RouterLink}
        to={`/`}
        sx={{
          textDecoration: "none",
          color: "inherit",
          margin: "0",
          padding: "0",
          order: "1",
        }}
      >
        <Typography
          // variant="h3"
          noWrap
          sx={{
            fontSize: { lg: "3rem", md: "2rem", sm: "2rem", xs: "2rem" },
            fontFamily: "Switzer",
            fontWeight: 500,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          croma
        </Typography>
      </Link>
      {/* </Toolbar> */}
    </>
  );
}

export default NavbarLogo;

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
        <Link component={RouterLink} to={`/`} style={{textDecoration: "none", color: "inherit", margin: '0', padding: '0'}} >
          <Typography
            variant="h3"
            noWrap
            // component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              // mr: 2,
              // display: { xs: "none", md: "flex" },
              // display: { md: "flex" },
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

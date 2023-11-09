import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  padding: theme.spacing(0, 4),
  width: "100%",
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(3),
  //   width: "auto",
  // },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      // width: "20ch",
    },
  },
  // width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

function NavbarSearch() {
  return (
    <>
      <Toolbar
        style={{
          width: "100%",
          padding: "auto 0",
        }}
      >
        {/* search box and icon */}
        <Toolbar
          style={{
            flexGrow: 1,
            padding: "auto 0",
          }}
        >
          <Search
            style={{
              backgroundColor: "white",
              color: "black",
              // width: "100%",
            }}
          >
            <StyledInputBase
              placeholder="What are you looking for ?"
              inputProps={{ "aria-label": "search" }}
              style={{
                width: "100%",
                padding: "0px",
              }}
            />

            <SearchIconWrapper sx={{ right: "0px", top: "0px" }}>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        </Toolbar>

        <Toolbar
          style={{
            marginLeft: "auto",
            justifyContent: "space-between",
            minWidth: "200px",
            padding: "auto 0",
          }}
        >
          {/* for 3 icons */}
          <Box>
            <LocationOnIcon />
            <EditIcon />
          </Box>
          <Box>
            <PersonIcon />
          </Box>
          <Box>
            <ShoppingCartIcon />
          </Box>
        </Toolbar>
      </Toolbar>
    </>
  );
}

export default NavbarSearch;

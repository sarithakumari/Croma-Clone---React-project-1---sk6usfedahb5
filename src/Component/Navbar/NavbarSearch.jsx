import React, { useRef, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography, Badge } from "@mui/material";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import NavbarAuthentication from "./NavbarAuthentication";
import NavbarCart from "./NavbarCart";
import NavbarLocation from "./NavbarLocation";
// import { teal } from '@mui/material/colors';

// const color = teal['A400'];

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
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  function handleInput(e) {
    // if(!searchText) return navigate(-1);
    if (e.key === "Enter") {
      navigate({
        pathname: "/searchB",
        search: createSearchParams({
          search: searchText,
        }).toString(),
      });
    } else {
      setSearchText(e.target.value);
    }
  }

  // console.log('searchparams', searchParams.get('search'));

  return (
    <>
      {/* <Toolbar
        sx={{
          width: "100%",
          padding: "auto 0",
        }}
      > */}
        {/* search box and icon */}
        <Toolbar
          sx={{
            flexGrow: 1,
            width: {lg: "", md: "", sm: "100%", xs: "100%"},
            padding: {lg: "auto 0", md: "auto 0", sm: "0", xs: "0"},
            order: {lg: "1", md: "1", sm: "2", xs: "2"},
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
              // onChange={(e)=>setSearchText(e.target.value)}
              onKeyUp={handleInput}
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
      {/* </Toolbar> */}

      {/* for location, login, cart */}
      <Toolbar
        sx={{
          width: "auto",
          marginLeft: "auto",
          padding: "auto 0",
          order: "1"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: {lg: "space-between", md: "space-between", sm: "flex-end", xs: "flex-end"},
            minWidth: {lg: "200px", md: "200px", md: "", sm: ""},
            alignItems: "center",
            // order: "1",
          }}
        >
          {/* Navbar Location/Pincode component */}
          <NavbarLocation />

          {/* Navbar Authentication */}
          <NavbarAuthentication />

          {/* Navbar Cart */}
          <NavbarCart />
        </Box>
      </Toolbar>
    </>
  );
}

export default NavbarSearch;
//<ShoppingCartIcon />

import {
  Box,
  Dialog,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LoginForm from "../Login/LoginForm";
import SignUpForm from "../SignUp/SignUpForm";
import NavAuthAccount from "./NavAuthAccount";
import NavAuthLogout from "./NavAuthLogout";

import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link as RouterLink } from "react-router-dom";
import CromaContext from "../../ContextAPI/CromaContext";
import styled from "@emotion/styled";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiList-root": {
    backgroundColor: "#090909",
    color: "white",
  },
}));

function NavbarAuthentication() {
  
  // showLogin state to display loginForm if true else signUp form if false
  const [showLogin, setShowLogin] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);

  const { openAuthDialog, handleCloseAuthDialog, handleOpenAuthDialog, userToken } =
    useContext(CromaContext);

  function handleCloseUserMenu() {
    setAnchorEl(null);
  }

  return (
    <>
      <Box
        component="div"
        style={{
          marginRight: "20px",
          cursor: "pointer",
        }}
        // onClick={handleOpenAuthDialog}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <PersonIcon style={{ fontSize: "25px" }} />
      </Box>

      <Dialog
        disableEscapeKeyDown
        open={openAuthDialog}
        // onClose={handleCloseAuthDialog}
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "#353535",
            opacity: ".8!important",
          },
        }}
      >
        <Box sx={{ backgroundColor: "black" }}>
          {showLogin && <LoginForm />}
          {!showLogin && <SignUpForm />}
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: 1,
              "& > .MuiButtonBase-root:hover": {
                border: "1px solid #12daa8",
              },
              "& > .Mui-disabled": {
                color: "#353535",
              },
            }}
          >
            {showLogin ? (
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  textAlign: "center",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontSize: "12px",
                }}
                onClick={() => setShowLogin(false)}
              >
                Don't have an account? Create Here
              </Typography>
            ) : (
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  textAlign: "center",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontSize: "12px",
                }}
                onClick={() => setShowLogin(true)}
              >
                Already have an account? Login here
              </Typography>
            )}
          </Box>
        </Box>

        {/* <LoginForm /> */}
        {/* <SignUpForm /> */}
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: "0",
            right: "0",
            margin: 2,
            cursor: "pointer",
            color: "white",
          }}
          onClick={handleCloseAuthDialog}
        >
          <CloseIcon />
        </Box>
      </Dialog>

      <StyledMenu
        anchorEl={anchorEl}
        open={openUserMenu}
        onClose={handleCloseUserMenu}
        sx={{
          "& .MuiButtonBase-root:hover": {
            backgroundColor: "#12DAA8",
            color: "black",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={handleCloseUserMenu} sx={{ padding: "1rem" }}>
          <Link
            component={RouterLink}
            to="/wishlists"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
              <Box component="div" sx={{ padding: "0 1rem" }}>
                <FavoriteIcon />
              </Box>
              <Box component="div" sx={{}}>
                <Typography component="p">My Wishlists</Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "0.75rem", marginTop: "0.2rem" }}
                >
                  Have a look at your favorite products
                </Typography>
              </Box>
            </Box>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu} sx={{ padding: "1rem" }}>
          <Link
            component={RouterLink}
            to="/orders"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
              <Box component="div" sx={{ padding: "0 1rem" }}>
                <LocalShippingIcon />
              </Box>
              <Box component="div" sx={{}}>
                <Typography component="p">My Orders</Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "0.75rem", marginTop: "0.2rem" }}
                >
                  All your placed orders (Order History)
                </Typography>
              </Box>
            </Box>
          </Link>
        </MenuItem>

        <MenuItem onClick={handleCloseUserMenu} sx={{ padding: "1rem" }}>
          <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
            <Box component="div" sx={{ padding: "0 1rem" }}>
              <AccountCircleIcon />
            </Box>
            <Box component="div" sx={{}}>
                {userToken ? <NavAuthLogout /> : <NavAuthAccount />}
            </Box>
          </Box>
        </MenuItem>
      </StyledMenu>
    </>
  );
}

export default NavbarAuthentication;

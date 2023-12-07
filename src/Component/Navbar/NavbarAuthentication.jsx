import { Box, Button, ButtonGroup, Dialog, Typography } from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LoginForm from "../Login/LoginForm";
import SignUpForm from "../SignUp/SignUpForm";

import CloseIcon from "@mui/icons-material/Close";

function NavbarAuthentication() {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        style={{
          marginRight: "20px",
          cursor: "pointer",
        }}
        onClick={handleClickOpen}
      >
        <PersonIcon style={{ fontSize: "25px" }} />
      </Box>

      <Dialog
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
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
                  fontSize: "12px"
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
                  fontSize: "12px"
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
          onClick={handleClose}
        >
          <CloseIcon />
        </Box>
      </Dialog>
    </>
  );
}

export default NavbarAuthentication;

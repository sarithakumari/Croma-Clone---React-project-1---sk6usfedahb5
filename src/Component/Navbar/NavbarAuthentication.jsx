import { Box, Dialog } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LoginForm from "../Login/LoginForm";
import styled from "@emotion/styled";

const StyledDialog = styled(Dialog)({
  "& .MuiDialog-root": {
    backgroundColor: "#353535",
    opacity: 0,
  },
});

function NavbarAuthentication() {
  const [open, setOpen] = React.useState(false);
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
        <LoginForm handleClose={handleClose} />
      </Dialog>
    </>
  );
}

export default NavbarAuthentication;

import { Box, Dialog, Typography } from "@mui/material";
import React, { useContext } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import CromaContext from "../../ContextAPI/CromaContext";
import Location from "../Location/Location";


function NavbarLocation() {
  const { location, pincode, openLocationDialog, handleOpenLocationDialog } = useContext(CromaContext);

  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "20px",
          cursor: "pointer"
        }}
        onClick={handleOpenLocationDialog}
      >
        <LocationOnIcon style={{ padding: "0" }} fontSize="xs" />
        <Typography variant="body2" component="p">
          {location},
        </Typography>
        <Typography variant="body2" component="p">
          {pincode}
        </Typography>
        <EditIcon fontSize="xs" />
      </Box>

      <Dialog
        disableEscapeKeyDown
        open={openLocationDialog}
        // onClose={handleCloseAuthDialog}
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "#353535",
            opacity: ".8!important",
          },
        }}
      >
        <Location />
      </Dialog>

      
    </>
  );
}

export default NavbarLocation;

import { Box, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";

function NavbarLocation() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: "20px",
      }}
      onClick={() => alert("pincode modal")}
    >
      <LocationOnIcon style={{ padding: "0" }} fontSize="xs" />
      <Typography variant="body2" component="p">
        Mumbai,
      </Typography>
      <Typography variant="body2" component="p">
        400049
      </Typography>
      <EditIcon fontSize="xs" />
    </Box>
  );
}

export default NavbarLocation;

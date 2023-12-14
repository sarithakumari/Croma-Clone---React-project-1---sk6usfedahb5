import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CromaContext from "../../ContextAPI/CromaContext";
import { getLocationApi } from "../../helper/getLocationApi";

function Location() {
//   const [pincode, setPincode] = useState("");

  const { location, handleSetLocation, handleCloseLocationDialog, pincode, handleSetPincode, handleFetchLocation } =
    useContext(CromaContext);

  //   useEffect(()=>{
  //     fetchLocation(pincode).
  //   }, [])

  async function fetchLocation() {
    try {
      const URL = `https://api.postalpincode.in/pincode/${pincode}`;
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data[0].PostOffice[0].District);
      handleSetLocation(data[0].PostOffice[0].District);
    } catch (error) {
      handleSetLocation("Invalid Pincode");
      //   console.error("error in fetching location: ", error.message);
    }
  }

  function handleLocationClick() {
    fetchLocation();
  }

  console.log(pincode);

  return (
    <Box flexGrow={1}>
      <Card
        component="form"
        // onSubmit={handleSignUpSubmit}
        sx={{
          width: "460px",
          padding: "1rem 2rem",
          margin: "auto",
          backgroundColor: "black",
          color: "white",
          borderRadius: 1,
        }}
      >
        <Stack
          spacing={2}
          sx={{
            marginTop: 2,
            padding: "0 0 2rem 0",
            "& .MuiInputBase-root": {
              color: "white",
            },
            "&:hover .MuiButtonBase-root": {
              backgroundColor: "#00b594",
            },
          }}
        >
          <Typography variant="h6" component="p" textAlign="center">
            SELECT YOUR LOCATION
          </Typography>
          <Box
            component="span"
            sx={{
              position: "absolute",
              top: "0",
              right: "1rem",
              margin: 2,
              cursor: "pointer",
              color: "white",
            }}
            onClick={handleCloseLocationDialog}
          >
            <CloseIcon />
          </Box>
          <Typography variant="body2" component="p" textAlign="center">
            To Check Products & Delivery Options available at your location
          </Typography>
          <TextField
            type="text"
            placeholder="Enter Pincode"
            value={pincode}
            required
            onChange={(e) => handleSetPincode(e.target.value)}
            sx={{ border: "1px solid white", borderRadius: 1, marginTop: 2 }}
          />
          {location && (
            <Typography variant="body2" component="p" textAlign="center">
              {location}
            </Typography>
          )}
          <Button
            variant="contained"
            // onClick={() => console.log({ pincode })}
            onClick={handleLocationClick}
            sx={{ backgroundColor: "#12daa8", color: "black" }}
          >
            Get Location
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}

export default Location;

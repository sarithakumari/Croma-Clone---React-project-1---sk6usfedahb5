import { LocalTaxi } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function Checkout() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addressNickName, setAddressNickname] = useState("");
  const [pincode, setPincode] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [locality, setLocality] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [addressType, setAddressType] = useState("");

  console.log(addressType);
  return (
    <Box
      flexGrow={1}
      component="div"
      sx={{
        paddingTop: "6rem",
        width: "100vw",
        color: "black",
        backgroundColor: "#f9f9f9!important",
      }}
    >
      <Container maxWidth="lg">
        <Box component="form" sx={{ paddingBottom: "3rem" }}>
          <Stack>
            {/* name phone no */}
            <Box component="div">
              <Typography component="p" variant="h6">
                Your Details:
              </Typography>
              <Grid container sx={{ padding: "1rem" }}>
                <Grid
                  item
                  sm={12}
                  lg={6}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box component="div" minWidth="400px">
                    <TextField
                      id="name"
                      label="Name"
                      required
                      fullWidth
                      value={name}
                      onClick={(e) => setName(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  sm={12}
                  lg={6}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box component="div" minWidth="400px">
                    <TextField
                      label="Phone Number"
                      required
                      fullWidth
                      value={phone}
                      onClick={(e) => setPhone(e.target.value)}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Address details as heading */}
            <Box component="div">
              <Typography component="p" variant="h6">
                Address Details:
              </Typography>
              <Grid container sx={{ padding: "1rem" }}>
                <Grid
                  item
                  sm={12}
                  lg={6}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box component="div" minWidth="400px">
                    <TextField
                      label="Address Nickname"
                      required
                      fullWidth
                      value={addressNickName}
                      onClick={(e) => setAddressNickname(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  sm={12}
                  lg={6}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box component="div" minWidth="400px">
                    <TextField
                      label="Pincode"
                      required
                      fullWidth
                      value={pincode}
                      onClick={(e) => setPincode(e.target.value)}
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container sx={{ padding: "1rem" }}>
                <Grid
                  item
                  sm={12}
                  lg={6}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box component="div" minWidth="400px">
                    <TextField
                      label="(Flat no., Building, Street)"
                      required
                      fullWidth
                      value={street}
                      onClick={(e) => setStreet(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  sm={12}
                  lg={6}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box component="div" minWidth="400px">
                    <TextField
                      label="Landmark"
                      required
                      fullWidth
                      value={landmark}
                      onClick={(e) => setLandmark(e.target.value)}
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container sx={{ padding: "1rem" }}>
                <Grid
                  item
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      maxWidth: "960px",
                      minWidth: "400px",
                      width: { sm: "400px", md: "840px", lg: "960px" },
                    }}
                  >
                    <TextField
                      label="Locality/Sector/Area"
                      required
                      fullWidth
                      value={locality}
                      onClick={(e) => setLocality(e.target.value)}
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container sx={{ padding: "1rem" }}>
                <Grid
                  item
                  sm={12}
                  lg={6}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box component="div" minWidth="400px">
                    <TextField
                      label="State"
                      required
                      fullWidth
                      value={state}
                      onClick={(e) => setState(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  sm={12}
                  lg={6}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box component="div" minWidth="400px">
                    <TextField
                      label="City"
                      required
                      fullWidth
                      value={city}
                      onClick={(e) => setCity(e.target.value)}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box component="div">
              <Typography component="p" variant="h6">
                Address Type:
              </Typography>
              <Box
                component="div"
                padding="1rem"
                sx={{
                  "& .homeBtn": {
                    border: addressType == "Home" ? "1px solid #12daa8" : "",
                  },
                  "& .workBtn": {
                    border: addressType == "Work" ? "1px solid #12daa8" : "",
                  },
                  "& .otherBtn": {
                    border: addressType == "Other" ? "1px solid #12daa8" : "",
                  },
                }}
              >
                <Button
                  className="homeBtn"
                  sx={{
                    marginRight: "1rem",
                    textTransform: "capitalize",
                    padding: "10px 20px",
                    width: "100px",
                    color: "black",
                    border: "1px solid black",
                  }}
                  onClick={(e) => setAddressType(e.target.innerText)}
                >
                  Home
                </Button>
                <Button
                  className="workBtn"
                  sx={{
                    marginRight: "1rem",
                    textTransform: "capitalize",
                    padding: "10px 20px",
                    width: "100px",
                    color: "black",
                    border: "1px solid black",
                  }}
                  onClick={(e) => setAddressType(e.target.innerText)}
                >
                  Work
                </Button>
                <Button
                  className="otherBtn"
                  sx={{
                    marginRight: "1rem",
                    textTransform: "capitalize",
                    padding: "10px 20px",
                    width: "100px",
                    color: "black",
                    border: "1px solid black",
                  }}
                  onClick={(e) => setAddressType(e.target.innerText)}
                >
                  Other
                </Button>
              </Box>
            </Box>

            <Box
              component="div"
              sx={{
                "& .MuiButtonBase-root:hover": { backgroundColor: "#12daa8" },
              }}
            >
              <Button
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  backgroundColor: "#12daa8",
                  color: "black",
                }}
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Checkout;

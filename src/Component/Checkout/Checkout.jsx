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
import ShippingAddress from "./ShippingAddress";

function Checkout() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [locality, setLocality] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [addressType, setAddressType] = useState("");

  const nameError = !Boolean(name);
  const phoneError = !Boolean(phone);
  const countryError = !Boolean(country);
  const pincodeError = !Boolean(pincode);
  const streetError = !Boolean(street);
  const landmarkError = !Boolean(landmark);
  const localityError = !Boolean(locality);
  const stateError = !Boolean(state);
  const cityError = !Boolean(city);

  const noError = !(
    nameError ||
    phoneError ||
    countryError ||
    pincodeError ||
    streetError ||
    landmarkError ||
    localityError ||
    stateError ||
    cityError ||
    !addressType
  );
  function handleSubmit(e) {
    if (noError) {
      console.log({
        name,
        phone,
        pincode,
        street,
        landmark,
        locality,
        country,
        state,
        city,
        addressType,
      });
    } else {
      alert("form incomplete");
    }
  }

  //   console.log(addressType);
  //   console.log({ name, phone, pincode });
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
        <Box
          component="form"
          sx={{
            paddingBottom: "3rem",
            backgroundColor: "white",
            padding: 1,
            borderRadius: "8px",
          }}
          noValidate
          autoComplete="off"
          //   onSubmit={handleSubmit}
        >
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
                      error={nameError}
                      helperText={nameError ? "Field Required" : ""}
                      onChange={(e) => setName(e.target.value)}
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
                      error={phoneError}
                      helperText={phoneError ? "Field Required" : ""}
                      onChange={(e) => setPhone(e.target.value)}
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
                      label="Country"
                      required
                      fullWidth
                      value={country}
                      error={countryError}
                      helperText={countryError ? "Field Required" : ""}
                      onChange={(e) => setCountry(e.target.value)}
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
                      error={pincodeError}
                      helperText={pincodeError ? "Field Required" : ""}
                      onChange={(e) => setPincode(e.target.value)}
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
                      error={streetError}
                      helperText={streetError ? "Field Required" : ""}
                      onChange={(e) => setStreet(e.target.value)}
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
                      error={landmarkError}
                      helperText={landmarkError ? "Field Required" : ""}
                      onChange={(e) => setLandmark(e.target.value)}
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
                      error={localityError}
                      helperText={localityError ? "Field Required" : ""}
                      onChange={(e) => setLocality(e.target.value)}
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
                      error={stateError}
                      helperText={stateError ? "Field Required" : ""}
                      onChange={(e) => setState(e.target.value)}
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
                      error={cityError}
                      helperText={cityError ? "Field Required" : ""}
                      onChange={(e) => setCity(e.target.value)}
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

            {noError && (
              <ShippingAddress
                addressType={addressType}
                street={street}
                locality={locality}
                city={city}
                state={state}
                country={country}
                pincode={pincode}
              />
            )}

            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                "& .MuiButtonBase-root:hover": { backgroundColor: "#12daa8" },
              }}
            >
              <Button
                sx={{
                  minWidth: "400px",
                  borderRadius: "8px",
                  backgroundColor: "#12daa8",
                  color: "black",
                }}
                disabled={!noError}
                onClick={handleSubmit}
              >
                Proceed to Payment
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Checkout;

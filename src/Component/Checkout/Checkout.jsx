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
import React, { useContext, useEffect, useState } from "react";
import ShippingAddress from "./ShippingAddress";
import { useNavigate } from "react-router-dom";
import CromaContext from "../../ContextAPI/CromaContext";

function Checkout() {
  
  const userToken = JSON.parse(localStorage.getItem('userToken'));
  
  // const [name, setName] = useState(username);
  const [phone, setPhone] = useState("");

  const {name, handleSetName, address, handleSetAddress, addressType, handleAddressType, handleOpenAuthDialog} = useContext(CromaContext);

  const navigate = useNavigate();

  const nameError = !Boolean(name);
  const phoneError = !Boolean(phone);
  const countryError = !Boolean(address.country);
  const pincodeError = !Boolean(address.pincode);
  const streetError = !Boolean(address.street);
  const landmarkError = !Boolean(address.landmark);
  const localityError = !Boolean(address.locality);
  const stateError = !Boolean(address.state);
  const cityError = !Boolean(address.city);

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

  useEffect(()=>{
    if(!userToken) {
      navigate('/');
      handleOpenAuthDialog();
    }
  }, [])

  function handleSubmit(e) {
    if (noError) {
      console.log({
        name,
        phone,
        addressType,
        address
      });
      navigate("/payment");
    } else {
      alert("form incomplete");
    }
  }
  // console.log('username',username)
  //   console.log(addressType);
  //   console.log({ name, phone, pincode });
  return (
    <Box
      flexGrow={1}
      component="div"
      sx={{
        paddingTop: "6rem",
        width: "100%",
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
        >
          <Stack>
            {/* name phone no */}
            <Box component="div" sx={{marginBottom: "1rem"}}>
              <Typography component="p" variant="h6">
                Your Details:
              </Typography>
              <Grid container sx={{ padding: "1rem" }}>
                <Grid
                  item
                  sm={12}
                  lg={6}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center", }}
                >
                  <Box component="div" minWidth="400px">
                    <TextField
                      id="name"
                      label="Name"
                      name="name"
                      required
                      fullWidth
                      value={name}
                      error={nameError}
                      helperText={nameError ? "Field Required" : ""}
                      onChange={handleSetName}
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
                      name="phone"
                      value={phone}
                      error={phoneError}
                      helperText={phoneError ? "Field Required" : ""}
                      onChange={(e) => setPhone(e.target.value)}
                      sx={{marginTop: {lg: "0", md: "0", sm: "1rem", xs: "1rem"}}}
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
              <Grid container sx={{ padding: "1rem", marginBottom: "1rem" }}>
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
                      name="country"
                      value={address.country}
                      error={countryError}
                      helperText={countryError ? "Field Required" : ""}
                      onChange={handleSetAddress}
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
                      name="pincode"
                      value={address.pincode}
                      error={pincodeError}
                      helperText={pincodeError ? "Field Required" : ""}
                      onChange={handleSetAddress}
                      sx={{marginTop: {lg: "0", md: "0", sm: "1rem", xs: "1rem"}}}
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container sx={{ padding: "1rem", marginBottom: "1rem" }}>
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
                      name="street"
                      value={address.street}
                      error={streetError}
                      helperText={streetError ? "Field Required" : ""}
                      onChange={handleSetAddress}
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
                      name="landmark"
                      value={address.landmark}
                      error={landmarkError}
                      helperText={landmarkError ? "Field Required" : ""}
                      onChange={handleSetAddress}
                      sx={{marginTop: {lg: "0", md: "0", sm: "1rem", xs: "1rem"}}}
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container sx={{ padding: "1rem", marginBottom: "1rem"  }}>
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
                      name="locality"
                      value={address.locality}
                      error={localityError}
                      helperText={localityError ? "Field Required" : ""}
                      onChange={handleSetAddress}
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container sx={{ padding: "1rem", marginBottom: "1rem"  }}>
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
                      name="state"
                      value={address.state}
                      error={stateError}
                      helperText={stateError ? "Field Required" : ""}
                      onChange={handleSetAddress}
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
                      name="city"
                      value={address.city}
                      error={cityError}
                      helperText={cityError ? "Field Required" : ""}
                      onChange={handleSetAddress}
                      sx={{marginTop: {lg: "0", md: "0", sm: "1rem", xs: "1rem"}}}
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
                  onClick={handleAddressType}
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
                  onClick={handleAddressType}
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
                  onClick={handleAddressType}
                >
                  Other
                </Button>
              </Box>
            </Box>

            {noError && (
              <ShippingAddress
                addressType={addressType}
                street={address.street}
                locality={address.locality}
                city={address.city}
                state={address.state}
                country={address.country}
                pincode={address.pincode}
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
                  marginBottom: "1rem"
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

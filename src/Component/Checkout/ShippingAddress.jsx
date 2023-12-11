import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

function ShippingAddress({
  addressType,
  street,
  locality,
  city,
  state,
  country,
  pincode,
}) {
  const location = useLocation();
  const { pathname } = location;
  // console.log(pathname);

  if (pathname === "/payment") {
    return (
      <Card elevation={0}>
        <CardContent>
          <Box component="div">
            <Typography
              variant="body2"
              component="span"
              textTransform="uppercase"
            >
              {street},&nbsp;
            </Typography>
            <Typography
              variant="body2"
              component="span"
              textTransform="uppercase"
            >
              {locality},&nbsp;
            </Typography>
            <Typography
              variant="body2"
              component="span"
              textTransform="uppercase"
            >
              {city}&nbsp;-&nbsp;
            </Typography>
            <Typography
              variant="body2"
              component="span"
              textTransform="uppercase"
            >
              {pincode}.&nbsp;
            </Typography>
            <Typography
              variant="body2"
              component="span"
              textTransform="uppercase"
            >
              {state}.&nbsp;
            </Typography>
            <Typography
              variant="body2"
              component="span"
              textTransform="uppercase"
            >
              {country}.&nbsp;
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ margin: "2rem 0", maxWidth: "400px" }}>
      <CardContent>
        <Typography
          variant="h6"
          component="p"
          sx={{ textDecoration: "underline", fontWeight: "700" }}
        >
          {addressType}
        </Typography>
        <Box component="div">
          <Typography variant="h6" component="span" sx={{ fontWeight: "500", textTransform: "uppercase" }}>
            {street},&nbsp;
          </Typography>
          <Typography variant="h6" component="span" sx={{ fontWeight: "500", textTransform: "uppercase" }}>
            {locality},&nbsp;
          </Typography>
          <Typography variant="h6" component="span" sx={{ fontWeight: "500", textTransform: "uppercase" }}>
            {city}&nbsp;-&nbsp;
          </Typography>
          <Typography variant="h6" component="span" sx={{ fontWeight: "500", textTransform: "uppercase" }}>
            {pincode}.&nbsp;
          </Typography>
          <Typography variant="h6" component="span" sx={{ fontWeight: "500", textTransform: "uppercase" }}>
            {state}.&nbsp;
          </Typography>
          <Typography variant="h6" component="span" sx={{ fontWeight: "500", textTransform: "uppercase" }}>
            {country}.&nbsp;
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ShippingAddress;

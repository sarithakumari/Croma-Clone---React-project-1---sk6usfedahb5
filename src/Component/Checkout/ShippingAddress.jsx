import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

function ShippingAddress({
  addressType,
  street,
  locality = undefined,
  city,
  state,
  country,
  pincode,
}) {
  const location = useLocation();
  const { pathname } = location;
  // console.log(pathname);

  if (pathname === "/orders") {
    return (
      <Card
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          color: "inherit",
          "& .MuiCardContent-root": {
            padding: "0"
          },
        }}
      >
        <CardContent sx={{ padding: "auto 0" }}>
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
    <Card sx={{ margin: "2rem 0", maxWidth: "400px" }} elevation={4}>
      <CardContent>
        <Typography
          variant="h6"
          component="p"
          sx={{ fontWeight: "700", textTransform: "uppercase" }}
        >
          {addressType}
        </Typography>
        <Box component="div">
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: "500", textTransform: "uppercase" }}
          >
            {street},&nbsp;
          </Typography>
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: "500", textTransform: "uppercase" }}
          >
            {locality},&nbsp;
          </Typography>
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: "500", textTransform: "uppercase" }}
          >
            {city}&nbsp;-&nbsp;
          </Typography>
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: "500", textTransform: "uppercase" }}
          >
            {pincode}.&nbsp;
          </Typography>
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: "500", textTransform: "uppercase" }}
          >
            {state}.&nbsp;
          </Typography>
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: "500", textTransform: "uppercase" }}
          >
            {country}.&nbsp;
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ShippingAddress;

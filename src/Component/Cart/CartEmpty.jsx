import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function CartEmpty() {
  return (
    <Box
      component="div"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        backgroundColor: "#f9f9f9!important",
        color: "black",
      }}
    >
      <Typography component="div">Your Cart is Empty. &nbsp;</Typography>
      <Link component={RouterLink} to="/" variant="body2">
        <Typography component="div">Continue Shopping</Typography>
      </Link>
    </Box>
  );
}

export default CartEmpty;

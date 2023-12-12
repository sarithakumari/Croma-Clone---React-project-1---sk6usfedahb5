import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import React from 'react'

function WishlistEmpty() {
  return (
    <Box
      component="div"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        // backgroundColor: "#f9f9f9!important",
        // color: "black",
      }}
    >
      <Typography component="div">No items to show. &nbsp;</Typography>
      <Link component={RouterLink} to="/" variant="body2" sx={{backgroundColor: "transparent", color: "#12daa8"}}>
        <Typography component="div">Continue Shopping</Typography>
      </Link>
    </Box>
  );
}

export default WishlistEmpty
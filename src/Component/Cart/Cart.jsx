import React, { useEffect } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CartOrderSummary from "./CartOrderSummary";
import CartProducts from "./CartProducts";
import { getCartItemApi } from "../../helper/getCartItemsApi";

function Cart() {
  const navigate = useNavigate();

  const userToken = JSON.parse(localStorage.getItem('userToken'));
  useEffect(()=>{
    // console.log(userToken);
    getCartItemApi(userToken)
  }, [])

  return (
    <>
      <Box
        flexGrow={1}
        sx={{
          backgroundColor: "#f9f9f9!important",
          color: "black",
          width: "100vw",
          height: "100vh",
          paddingTop: "6rem",
          overflowY: "clip"
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h5"
            component="p"
            sx={{ fontWeight: "700", borderRadius: 1, padding: "1rem 0" }}
          >
            YOUR CART
          </Typography>

          <Box sx={{ width: "100%", marginTop: 1 }}>
            <Grid container >
              <Grid item lg={8} md={8} sm={12} xs={12}>
                <CartProducts />
              </Grid>

              <Grid item lg={4} md={4} sm={12} xs={12}>
                <CartOrderSummary />
              </Grid>

            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Cart;

// const userToken = localStorage.getItem('userToken');
// console.log("token",userToken);

// useEffect(()=>{
//   if(!userToken)
//   return navigate('/')
// }, [])

// if(!userToken)
//   return navigate('/')

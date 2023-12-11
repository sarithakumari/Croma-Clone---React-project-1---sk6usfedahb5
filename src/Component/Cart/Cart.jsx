import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CartOrderSummary from "./CartOrderSummary";
import CartProducts from "./CartProducts";
import { getCartItemApi } from "../../helper/getCartItemsApi";
import { clearCartApi } from "../../helper/clearCartApi";
import CartEmpty from "./CartEmpty";
import CromaContext from "../../ContextAPI/CromaContext";

function Cart() {
  const navigate = useNavigate();
  // const [cartProducts, setCartProducts] = useState(null);
  const {cartProducts, handleSetCartProducts} = useContext(CromaContext);

  const userToken = JSON.parse(localStorage.getItem("userToken"));

  useEffect(() => {
    getCartItemApi(userToken).then((data) => {
      // console.log(data);
      handleSetCartProducts(data.data);
    });
  }, []);

  function handleClearCart() {
    clearCartApi(userToken);
  }

  // function handleSetCartProducts(data) {
  //   setCartProducts(data);
  // }

  console.log(cartProducts);

  if(!cartProducts || cartProducts?.items?.length===0) return (<CartEmpty />)

  return (
    <>
      <Box
        flexGrow={1}
        sx={{
          backgroundColor: "#f9f9f9!important",
          color: "black",
          width: "100vw",
          paddingTop: "6rem",
        }}
      >
        <Container maxWidth="lg">
          {cartProducts?.items?.length !== 0 ? (
            <>
              <Typography
                variant="h5"
                component="p"
                sx={{ fontWeight: "700", borderRadius: 1, padding: "1rem 0" }}
              >
                YOUR CART
              </Typography>

              <Box sx={{ width: "100%", marginTop: 1 }}>
                <Grid container>
                  <Grid item lg={8} md={8} sm={12} xs={12}>
                    {cartProducts?.items.map((product, index) => (
                      <CartProducts
                        key={index}
                        product={product}
                        handleClearCart={handleClearCart}
                        handleSetCartProducts={handleSetCartProducts}
                      />
                    ))}
                  </Grid>

                  <Grid item lg={4} md={4} sm={12} xs={12}>
                    <CartOrderSummary
                      totalPrice={cartProducts?.totalPrice}
                      totalItems={cartProducts?.items.length}
                    />
                  </Grid>
                </Grid>
              </Box>
            </>
          ) : (
            <CartEmpty />
          )}
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

import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function CartOrderSummary({ totalPrice, totalItems }) {
  
  const navigate = useNavigate();

  function handleCheckout() {
    navigate('/checkout');
  }
  return (
    <Box
      width="100%"
      sx={{
        padding: "1.5rem",
        borderRadius: "0.8rem",
        backgroundColor: "#ffffff",
      }}
    >
      <Typography
        variant="body1"
        component="p"
        fontWeight="700"
        fontSize="18px"
        marginBottom={2}
      >
        Order Summary ({totalItems} items){" "}
      </Typography>
      <Stack spacing={3}>
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography component="p" variant="body1">
            Original Price
          </Typography>
          <Typography component="p" variant="body1">
          ₹{totalPrice.toLocaleString(navigator.language, {minimumFractionDigits: 2})}
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography component="p" variant="body1">
            Delivery
          </Typography>
          <Box>
            <Typography component="span" variant="body1" sx={{textDecoration: "line-through", fontSize: "small"}}>
            ₹60 {" "}
          </Typography>
          <Typography component='span'>Free</Typography>
          </Box>
          
        </Box>
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography component="p" variant="body1">
            Total
          </Typography>
          <Typography component="p" variant="body1">
          ₹{totalPrice.toLocaleString(navigator.language, {minimumFractionDigits: 2})}
          </Typography>
        </Box>
      </Stack>
      <Button
        fullWidth
        sx={{
          marginTop: 4,
          background: "#12daa8",
          color: "#103749",
          textAlign: "center",
          borderRadius: "8px",
          border: "1px solid #12daa8",
          textTransform: "capitalize",
          //   padding: "0.9rem 1.5rem",
          fontWeight: "700",
          //   fontSize: "1.2rem"
        }}
        onClick={handleCheckout}
      >
        Checkout
      </Button>
    </Box>
  );
}

export default CartOrderSummary;

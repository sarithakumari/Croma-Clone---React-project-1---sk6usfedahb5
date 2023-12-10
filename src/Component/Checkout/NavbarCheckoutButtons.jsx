import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function NavbarCheckoutButtons() {
  const navigate = useNavigate();
  const { pathname: location } = useLocation();
  const isCheckoutPath = Boolean(location === "/checkout");
  console.log(isCheckoutPath);

  return (
    <Box
      component="div"
      sx={{
        marginLeft: "auto",
        border: "1px solid #353535",
        borderRadius: "5px",
      }}
    >
      <Box
        component="div"
        sx={{
          "& .payment-btn": {
            backgroundColor: "transparent",
            color: "#353535",
          },
        }}
      >
        <Button
          sx={{
            backgroundColor: "transparent",
            color: "white",
            borderRadius: "5px",
            textTransform: "capitalize",
            fontSize: "14px",
            fontWeight: "500",
            padding: "10px 20px",
          }}
          onClick={() => navigate("/cart")}
        >
          Cart
        </Button>
        <Button
          sx={{
            backgroundColor: "transparent",
            color: "white",
            borderRadius: "5px",
            border: "1px solid #12daa8",
            textTransform: "capitalize",
            fontSize: "14px",
            fontWeight: "500",
            padding: "10px 20px",
          }}
        >
          Shipping
        </Button>
        <Button
          className="payment-btn"
          sx={{
            // backgroundColor: "transparent",
            // color: "white",
            borderRadius: "5px",
            textTransform: "capitalize",
            fontSize: "14px",
            fontWeight: "500",
            padding: "10px 20px",
          }}
          variant={isCheckoutPath ? "disabled" : "contained"}
        >
          Payment
        </Button>
      </Box>
    </Box>
  );
}

export default NavbarCheckoutButtons;

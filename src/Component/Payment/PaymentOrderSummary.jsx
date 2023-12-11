import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CromaContext from "../../ContextAPI/CromaContext";
import ShippingAddress from "../Checkout/ShippingAddress";

function PaymentOrderSummary() {
  const { cartProducts, address, addressType } = useContext(CromaContext);

  const username = JSON.parse(localStorage.getItem("username"));

  console.log(cartProducts?.items.length);

  return (
    <Box
      component="div"
      sx={{ width: "100%", backgroundColor: "white", borderRadius: "8px" }}
    >
      <Typography
        component="p"
        variant="h6"
        sx={{ fontWeight: "700", padding: "1.5rem 0 1rem 1rem" }}
      >
        Order Summary
      </Typography>
      <Stack spacing={2}>
        {/* repeat number of times cartItems */}
        {cartProducts?.items.map((item, index) => (
          <Box
            key={index}
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "1rem",
              padding: "0 1rem 0",
            }}
          >
            <Box
              component="div"
              id="paymentSummary-img"
              sx={{
                border: "1px solid lightgrey",
                borderRadius: "5px",
                padding: 1,
                minWidth: "60px",
              }}
            >
              <CardMedia
                component="img"
                src={item.product.displayImage}
                alt="image"
                height="50"
                width="50"
                loading="lazy"
                sx={{
                  objectFit: "contain",
                  borderRadius: "5px",
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg";
                }}
              />
            </Box>

            <Box component="div" id="paymentSummary-name">
              <Typography
                component="p"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "2",
                  fontWeight: "700",
                  padding: "0 0.3rem",
                  fontSize: "12px",
                }}
              >
                {item.product.name}
              </Typography>
            </Box>

            <Box component="div">
              <Typography
                component="span"
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  padding: "0 0.3rem",
                }}
              >
                ₹{item.product.price.toFixed(2)}
              </Typography>
            </Box>
          </Box>
        ))}

        <Box component="div" id="paymentSummary-address">
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#12daa8" }} />}
            >
              <Stack>
                <Typography component="p" variant="body2" fontWeight="700">
                  Shipping Address
                </Typography>
                <Box component="div" sx={{ display: "flex" }}>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ marginRight: "1rem" }}
                  >
                    {username}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      border: "1px solid lightgrey",
                      borderRadius: "5px",
                      color: "lightgrey",
                      padding: "5px",
                      fontSize: "8px",
                      textTransform: "uppercase",
                    }}
                  >
                    {addressType}
                  </Typography>
                </Box>
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{padding: "0"}} >
              <ShippingAddress
                addressType={addressType}
                street={address.street}
                locality={address.locality}
                city={address.city}
                state={address.state}
                country={address.country}
                pincode={address.pincode}
              />
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box component="div" id="paymentSummary-amount">
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 1rem",
            }}
          >
            <Typography variant="body2" component="p" fontWeight="700">
              Amount Payable:
            </Typography>
            <Typography variant="body2" component="p" fontWeight="700">
              ₹{cartProducts?.totalPrice.toFixed(2)}
            </Typography>
          </Box>
        </Box>

        <Box
          component="div"
          id="paymentSummary-btn"
          sx={{
            padding: "0 1rem 1rem",
            "& .MuiButtonBase-root:hover": { backgroundColor: "#12daa8" },
          }}
        >
          <Button fullWidth sx={{ color: "black", backgroundColor: "#12daa8" }}>
            Pay Now
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default PaymentOrderSummary;

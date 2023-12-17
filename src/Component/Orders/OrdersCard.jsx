import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShippingAddress from "../Checkout/ShippingAddress";
import CromaContext from "../../ContextAPI/CromaContext";
import { addToCart } from "../../helper/addToCart";
import { addProductToWishlist } from "../../helper/addProductToWishlist";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00e9bf",
  },
});

function OrdersCard({ item }) {
  const { handleOpenAuthDialog, handleItemsInCart, userToken } = useContext(CromaContext);
  
  const navigate = useNavigate();

  async function handleBuyNow(e) {
    if (!userToken) {
      handleOpenAuthDialog();
    } else {
      const res = await addToCart(orderDetails._id, userToken);
      console.log(res);
      toast.success(res.message);
      handleItemsInCart(res.data.items.length);
    }
  }

  async function handleMoveProductToWishlist() {
    const data = await addProductToWishlist(orderDetails._id, userToken);

    if (data.status === "success") {
      toast.success(data.message);
    }
  }

  const date = new Date(item.createdAt);
  const orderDate = date.toDateString();
  const shipmentDetails = item.order.shipmentDetails;
  const orderDetails = item.order.items[0].product;
  //   console.log(orderDate);
  //   console.log(totalPrice);
  //   console.log(item.order.items[0].product);
  // .order.items[0].product

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        padding: {
          lg: "2rem 0 0 16rem",
          md: "2rem 0 0 16rem",
          sm: "12rem 0 0 2rem",
          xs: "12rem 0 0 2rem",
        },
        position: "relative",
        margin: "1rem 0",
        // alignItems: "center",
        // justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box component="div" sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <CardActionArea
            disableRipple
            onClick={() => navigate(`/product/${orderDetails._id}`)}
          >
            <Typography
              component="p"
              // variant="h6"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "2",
                fontWeight: "500",
                fontSize: { lg: "18px", md: "18px", sm: "14px", xs: "12px" },
                width: "100%",
              }}
            >
              {orderDetails.name}
            </Typography>
          </CardActionArea>

          <Typography
            component="p"
            sx={{
              fontSize: { lg: "16px", md: "16px", sm: "12px", xs: "12px" },
            }}
          >
            Product Id: {orderDetails._id}
          </Typography>

          <Box component="div" sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "3rem",
                // borderRadius: "8px",
              }}
            >
              <Typography
                component="p"
                sx={{
                  marginRight: "2rem",
                  fontSize: { lg: "16px", md: "16px", sm: "12px", xs: "12px" },
                }}
              >
                ₹
                {orderDetails.price.toLocaleString(navigator.language, {
                  minimumFractionDigits: 2,
                })}
              </Typography>
              <Typography
                component="p"
                sx={{
                  textDecoration: "line-through",
                  fontSize: { lg: "16px", md: "16px", sm: "12px", xs: "12px" },
                }}
              >
                ₹
                {(orderDetails.price * 1.15).toLocaleString(
                  navigator.language,
                  { minimumFractionDigits: 2 }
                )}
              </Typography>
            </Box>
          </Box>
          <Box component="div">
            <StyledRating
              value={orderDetails.ratings}
              readOnly
              precision={0.1}
              size="small"
            />
          </Box>

          <Box component="div">
            <Typography
              component="p"
              sx={{
                fontSize: { lg: "16px", md: "16px", sm: "12px", xs: "12px" },
              }}
            >
              Ordered On: {orderDate}
            </Typography>
          </Box>

          <Box
            component="div"
            sx={{
              "& .MuiAccordionSummary-root, .MuiAccordionDetails-root": {
                padding: "0",
              },
            }}
          >
            <Accordion
              elevation={0}
              sx={{ backgroundColor: "transparent", color: "inherit" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#12daa8" }} />}
                sx={{
                  fontSize: { lg: "16px", md: "16px", sm: "12px", xs: "12px" },
                }}
              >
                Delivered At:
              </AccordionSummary>
              <AccordionDetails
                sx={{ backgroundColor: "transparent", color: "inherit" }}
              >
                <ShippingAddress
                  addressType={shipmentDetails.type}
                  street={shipmentDetails.address.street}
                  city={shipmentDetails.address.city}
                  state={shipmentDetails.address.state}
                  pincode={shipmentDetails.address.zipCode}
                  country={shipmentDetails.address.country}
                />
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box component="div" sx={{ marginRight: "1rem" }}>
            <Box
              component="div"
              sx={{
                "& .addtoCart:hover": {
                  border: "1px solid #12daa8",
                  backgroundColor: "#12daa8",
                },
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                // justifyContent: "space-around"
              }}
            >
              <div>
                <Button
                  className="addtoCart"
                  disableRipple
                  sx={{
                    color: "black",
                    backgroundColor: "#12daa8",
                    textAlign: "center",
                    borderRadius: "8px",
                    border: "1px solid #12daa8",
                    textTransform: "capitalize",
                    fontSize: "12px",
                    padding: "10px 40px",
                    fontWeight: "700",
                    minWidth: "200px",
                    margin: "0 0 1rem 0",
                  }}
                  onClick={handleBuyNow}
                >
                  Buy Again
                </Button>
              </div>
              <div>
                <Button
                  sx={{
                    color: "#ffffff",
                    textAlign: "center",
                    borderRadius: "8px",
                    border: "1px solid #ffffff",
                    textTransform: "capitalize",
                    fontSize: "12px",
                    padding: "10px 40px",
                    fontWeight: "700",
                    minWidth: "200px",
                    margin: "0 0 1rem 0",
                  }}
                  onClick={handleMoveProductToWishlist}
                >
                  Add to Wishlist
                </Button>
              </div>
            </Box>
          </Box>
        </Stack>
        
        <Divider sx={{ borderColor: "#353535" }} />
      </Box>

      {/* <Box component="div" sx={{ marginRight: "1rem" }}>
        <Box
          component="div"
          sx={{
            "& .addtoCart:hover": {
              border: "1px solid #12daa8",
              backgroundColor: "#12daa8",
            },
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "space-around"
          }}
        >
          <div>
            <Button
              className="addtoCart"
              disableRipple
              sx={{
                color: "black",
                backgroundColor: "#12daa8",
                textAlign: "center",
                borderRadius: "8px",
                border: "1px solid #12daa8",
                textTransform: "capitalize",
                fontSize: "12px",
                padding: "10px 40px",
                fontWeight: "700",
                minWidth: "200px",
                margin: "0 0 1rem 0",
              }}
              onClick={handleBuyNow}
            >
              Buy Again
            </Button>
          </div>
          <div>
            <Button
              sx={{
                color: "#ffffff",
                textAlign: "center",
                borderRadius: "8px",
                border: "1px solid #ffffff",
                textTransform: "capitalize",
                fontSize: "12px",
                padding: "10px 40px",
                fontWeight: "700",
                minWidth: "200px",
                margin: "0 0 1rem 0",
              }}
              onClick={handleMoveProductToWishlist}
            >
              Add to Wishlist
            </Button>
          </div>
        </Box>
      </Box> */}

      <Box
        component="div"
        sx={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          borderRadius: "8px",
        }}
      >
        <CardActionArea
          disableRipple
          onClick={() => navigate(`/product/${orderDetails._id}`)}
        >
          <CardMedia
            component="img"
            src={orderDetails.displayImage}
            alt="image"
            height="150"
            width="150"
            loading="lazy"
            sx={{
              objectFit: "contain",
              borderRadius: "8px",
              aspectRatio: "4/3",
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg";
            }}
          />
        </CardActionArea>
      </Box>

      <Divider sx={{ borderColor: "#353535" }} />
    </Box>
  );
}

export default OrdersCard;

import styled from "@emotion/styled";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { removeProductFromCartApi } from "../../helper/removeProductFromCartApi";
import CromaContext from "../../ContextAPI/CromaContext";
import { addProductToWishlist } from "../../helper/addProductToWishlist";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00e9bf",
  },
});

function CartProducts({ product, handleSetCartProducts, handleClearCart }) {
  const { handleItemsInCart, userToken } = useContext(CromaContext);
  const navigate = useNavigate();

  async function handleRemoveProductFromCart() {
    const data = await removeProductFromCartApi(product.product._id, userToken);
    // console.log("removed from cart: ",data);
    if (data?.data?.items?.length == 0) {
      handleSetCartProducts(null);
    } else {
      handleSetCartProducts(data.data);
    }
    if (data?.status === "success") {
      toast.success(data.message);
    }
    handleItemsInCart(data?.data?.items?.length);
  }

  async function handleMoveProductToWishlist() {
    const data = await addProductToWishlist(product.product._id, userToken);
    // console.log("wishlist from cart: ", data);
    if (
      data.status === "fail" &&
      data.message === "Product already exists in the wishlist."
    ) {
      toast.info(data.message);
    }
    if (data.status === "success") {
      toast.success(data.message);
    }
    handleRemoveProductFromCart();
  }

  // console.log("product in cart: ", product.product._id);
  return (
    <Box
      component="div"
      sx={{
        padding: {
          lg: "1rem 1rem 1rem 14rem",
          md: "1rem 1rem 1rem 14rem",
          sm: "12rem 1rem 1rem 1rem",
          xs: "12rem 1rem 1rem 1rem",
        },
        position: "relative",
        borderRadius: "0.8rem",
        backgroundColor: "#ffffff",
        marginBottom: "1rem",
        marginRight: { lg: "1rem", md: "1rem", sm: "0rem", xs: "0rem" },
      }}
    >
      {/* left box || right box */}
      <Box
        component="div"
        sx={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <Box component="div" id="cartDetails-left" sx={{ width: "100%" }}>
          {/* typo */}
          <CardActionArea
            disableRipple
            onClick={() => navigate(`/product/${product.product._id}`)}
          >
            <Typography
              component="p"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "2",
                fontWeight: "700",
                fontSize: { lg: "18px", md: "18px", sm: "14px", xs: "12px" },
                width: "100%",
              }}
            >
              {product.product.name}
            </Typography>
          </CardActionArea>

          {/* rating */}
          <Box
            component="div"
            marginTop={1}
            sx={{
              width: "100%",
              "& .MuiRating-root": {
                fontSize: { lg: "14px", md: "14px", sm: "12px", xs: "12px" },
              },
            }}
          >
            <StyledRating
              value={product?.product?.ratings}
              readOnly
              precision={0.1}
              // size="small"
            />
          </Box>

          {/* delivery texts */}
          <Box
            component="div"
            sx={{
              display: "flex",
              marginTop: 1,
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <Typography
              component="p"
              variant="body2"
              sx={{
                width: "150px",
                padding: "0 1rem 1rem 0",
                borderRadius: 1,
                marginRight: 2,
                fontSize: { lg: "14px", md: "14px", sm: "10px", xs: "10px" },
              }}
            >
              Standard delivery by tomorrow
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "#979797",
                display: { lg: "block", md: "block", sm: "block", xs: "none" },
              }}
            />
            <Typography
              component="p"
              variant="body2"
              sx={{
                width: "150px",
                padding: "0 0 1rem 1rem",
                padding: {
                  lg: "0 0 1rem 1rem",
                  md: "0 0 1rem 1rem",
                  sm: "0 0 1rem 1rem",
                  xs: "0 0 1rem 0",
                },
                borderRadius: 1,
                fontSize: { lg: "14px", md: "14px", sm: "10px", xs: "10px" },
              }}
            >
              Express delivery by today
            </Typography>
          </Box>

          {/* buttons */}
          {/* <Box
            component="div"
            marginTop={1}
            sx={{
              "& .MuiButtonBase-root:hover ": {
                border: "1px solid #12daa8",
              },
              width: "100%",
            }}
          >
            <Button
              disableRipple
              sx={{
                color: "#103749",
                textAlign: "center",
                borderRadius: "8px",
                border: "1px solid black",
                textTransform: "capitalize",
                // marginRight: 1.2,
                fontSize: "12px",
                padding: "10px 40px",
                fontWeight: "700",
                width: "180px",
              }}
              onClick={handleMoveProductToWishlist}
            >
              Move to Wishlist
            </Button>
            <Button
              sx={{
                color: "#103749",
                textAlign: "center",
                borderRadius: "8px",
                border: "1px solid black",
                textTransform: "capitalize",
                // marginLeft: 1.2,
                fontSize: "12px",
                padding: "10px 40px",
                fontWeight: "700",
                width: "180px",
              }}
              onClick={handleRemoveProductFromCart}
            >
              Remove
            </Button>
          </Box> */}
        </Box>

        <Box
          component="div"
          id="cartDetails-right"
          sx={{ width: "100%", textAlign: "end" }}
        >
          <Box component="div" sx={{}}>
            <Typography
              component="span"
              sx={{
                fontSize: { lg: "18px", md: "18px", sm: "14px", xs: "12px" },
              }}
            >
              ₹
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: { lg: "18px", md: "18px", sm: "14px", xs: "12px" },
                fontWeight: "700",
              }}
            >
              {product.product.price.toLocaleString(navigator.language, {
                minimumFractionDigits: 2,
              })}
            </Typography>
          </Box>

          <Typography
            component="p"
            variant="body2"
            textAlign="end"
            sx={{
              padding: "1rem 0",
              fontSize: { lg: "12px", md: "12px", sm: "10px", xs: "10px" },
            }}
          >
            (Incl. all Taxes)
          </Typography>

          <Divider />

          <Box component="div" sx={{ textAlign: "end" }}>
            <Typography
              component="span"
              fontWeight="500"
              fontSize="14px"
              sx={{
                textDecoration: "line-through",
                fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
              }}
            >
              MRP{" "}
            </Typography>
            <Typography
              component="span"
              fontWeight="500"
              fontSize="14px"
              sx={{
                textDecoration: "line-through",
                fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" },
              }}
            >
              ₹
              {(product.product.price * 1.15).toLocaleString(
                navigator.language,
                { minimumFractionDigits: 2 }
              )}
            </Typography>
            <Typography
              component="p"
              fontWeight="500"
              color="grey"
              textAlign="end"
              sx={{
                fontSize: { lg: "12px", md: "12px", sm: "10px", xs: "10px" },
              }}
            >
              (Save ₹
              {(
                product.product.price * 1.15 -
                product.product.price
              ).toLocaleString(navigator.language, {
                minimumFractionDigits: 2,
              })}
              )
            </Typography>
          </Box>
          <Divider />
        </Box>

        {/* buttons */}
        <Box
          component="div"
          marginTop={1}
          sx={{
            "& .MuiButtonBase-root:hover ": {
              border: "1px solid #12daa8",
            },
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: {
              lg: "space-around",
              md: "space-around",
              sm: "space-around",
              xs: "space-between",
            },
          }}
        >
          <Button
            disableRipple
            sx={{
              color: "#103749",
              textAlign: "center",
              borderRadius: "8px",
              border: "1px solid black",
              textTransform: "capitalize",
              // marginRight: 1.2,
              fontSize: { lg: "12px", md: "12px", sm: "10px", xs: "10px" },
              padding: "10px 20px",
              fontWeight: "700",
              // width: {lg: "180px", md: "180px", sm: "150px", xs: "180px"},
            }}
            onClick={handleMoveProductToWishlist}
          >
            Move to Wishlist
          </Button>
          <Button
            sx={{
              color: "#103749",
              textAlign: "center",
              borderRadius: "8px",
              border: "1px solid black",
              textTransform: "capitalize",
              // marginLeft: 1.2,
              fontSize: { lg: "12px", md: "12px", sm: "10px", xs: "10px" },
              padding: "10px 40px",
              fontWeight: "700",
              // width: {lg: "180px", md: "180px", sm: "120px", xs: "120px"},
            }}
            onClick={handleRemoveProductFromCart}
          >
            Remove
          </Button>
        </Box>
      </Box>

      {/* image */}
      <Box
        component="div"
        sx={{ position: "absolute", top: "2rem", left: "2rem" }}
      >
        <CardActionArea
          disableRipple
          onClick={() => navigate(`/product/${product.product._id}`)}
        >
          <CardMedia
            component="img"
            src={product.product.displayImage}
            alt="image"
            height="150"
            width="150"
            loading="lazy"
            sx={{
              objectFit: "contain",
              borderRadius: "8px",
              aspectRatio: "1/1"
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg";
            }}
          />
        </CardActionArea>
      </Box>
    </Box>
  );
}

export default CartProducts;

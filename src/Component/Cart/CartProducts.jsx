import styled from "@emotion/styled";
import {
  Box,
  Button,
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

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00e9bf",
  },
});

function CartProducts({ product, handleSetCartProducts, handleClearCart }) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  const { handleItemsInCart } = useContext(CromaContext);

  async function handleRemoveProductFromCart() {
    const data = await removeProductFromCartApi(product.product._id, userToken);
    // console.log("removed from cart: ",data);
    if (data.data.items.length == 0) {
      handleSetCartProducts(null);
    } else {
      handleSetCartProducts(data.data);
    }
    if(data.status === 'success') {
      toast.success(data.message);
    }
    handleItemsInCart(data.data.items.length);
  }

  async function handleMoveProductToWishlist() {
    const data = await addProductToWishlist(product.product._id, userToken);
    // console.log("wishlist from cart: ", data);
    if (data.status === "fail" && data.message === "Product already exists in the wishlist.") {
      toast.info(data.message);
    } 
    if(data.status === 'success') {
      toast.success(data.message);
    }
    handleRemoveProductFromCart();
  }

  console.log("product in cart: ", product.product._id);
  return (
    <Box
      component="div"
      sx={{
        padding: "1rem 0 1rem 9rem",
        position: "relative",
        marginRight: 1,
        borderRadius: "0.8rem",
        backgroundColor: "#ffffff",
        marginBottom: 1,
      }}
    >
      {/* left box || right box */}
      <Box component="div" sx={{ display: "flex", marginLeft: "1.5rem" }}>
        <Box
          component="div"
          id="cartDetails-left"
          sx={{ paddingRight: "1.5rem" }}
        >
          <Typography
            component="p"
            variant="h6"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "2",
              fontWeight: "500",
            }}
          >
            {product.product.name}
          </Typography>

          <Box component="div" marginTop={1}>
            <StyledRating
              value={product?.product?.ratings}
              readOnly
              precision={0.1}
              size="small"
            />
          </Box>

          <Box component="div" sx={{ display: "flex", marginTop: 1 }}>
            <Typography
              component="p"
              variant="body2"
              sx={{ width: "150px", padding: "0 1rem 1rem 0", borderRadius: 1 }}
            >
              Standard delivery by tomorrow
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "#979797" }}
            />
            <Typography
              component="p"
              variant="body2"
              sx={{ width: "150px", padding: "0 0 1rem 1rem", borderRadius: 1 }}
            >
              Express delivery by today
            </Typography>
          </Box>

          <Box
            component="div"
            marginTop={1}
            sx={{
              "& .MuiButtonBase-root:hover ": {
                border: "1px solid #12daa8",
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
                marginRight: 1.2,
                fontSize: "12px",
                padding: "10px 40px",
                fontWeight: "700",
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
                marginLeft: 1.2,
                fontSize: "12px",
                padding: "10px 40px",
                fontWeight: "700",
              }}
              onClick={handleRemoveProductFromCart}
            >
              Remove
            </Button>
          </Box>
        </Box>

        <Box
          component="div"
          id="cartDetails-right"
          sx={{ paddingRight: "1.5rem", width: "200px", textAlign: "end" }}
        >
          <Box>
            <Typography component="span" sx={{ fontSize: "24px" }}>
              ₹
            </Typography>
            <Typography
              component="span"
              sx={{ fontSize: "24px", fontWeight: "700" }}
            >
              {product.product.price.toLocaleString(navigator.language, {minimumFractionDigits: 2})}
            </Typography>
          </Box>

          <Typography
            component="p"
            variant="body2"
            textAlign="end"
            sx={{ padding: "1rem 0" }}
          >
            (Incl. all Taxes)
          </Typography>

          <Divider />

          <Box component="div" sx={{ textAlign: "end" }}>
            <Typography
              component="span"
              fontWeight="500"
              fontSize="14px"
              sx={{ textDecoration: "line-through" }}
            >
              MRP{" "}
            </Typography>
            <Typography
              component="span"
              fontWeight="500"
              fontSize="14px"
              sx={{ textDecoration: "line-through" }}
            >
              ₹{(product.product.price * 1.15).toLocaleString(navigator.language, {minimumFractionDigits: 2})}
            </Typography>
            <Typography
              component="p"
              fontWeight="500"
              fontSize="12px"
              color="grey"
              textAlign="end"
            >
              (Save ₹
              {(product.product.price * 1.15 - product.product.price).toLocaleString(navigator.language, {minimumFractionDigits: 2})}
              )
            </Typography>
          </Box>
          <Divider />
        </Box>
      </Box>

      {/* image */}
      <Box
        component="div"
        sx={{ position: "absolute", top: "2rem", left: "3.6%" }}
      >
        <CardMedia
          component="img"
          src={product.product.displayImage}
          alt="image"
          height="100"
          width="100"
          loading="lazy"
          sx={{
            objectFit: "contain",
            borderRadius: "8px",
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg";
          }}
        />
      </Box>
    </Box>
  );
}

export default CartProducts;

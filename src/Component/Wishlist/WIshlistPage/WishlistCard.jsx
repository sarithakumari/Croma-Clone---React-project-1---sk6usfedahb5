import styled from "@emotion/styled";
import {
  Box,
  Button,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { addToCart } from "../../../helper/addToCart";
import { removeProductFromCartApi } from "../../../helper/removeProductFromCartApi";
import CromaContext from "../../../ContextAPI/CromaContext";
import { deleteProductFromWishlist } from "../../../helper/deleteProductFromWishlist";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00e9bf",
  },
});

function WishlistCard({ item }) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  const { handleItemsInCart, handleSetWishlists } = useContext(CromaContext);

  async function handleAddToCart() {
    const data = await addToCart(item.products._id, userToken);
    // const res = addToCart(productDetails._id, userToken);
    console.log(data);
    handleItemsInCart(data.data.items.length);
    alert(data.message);
  }

  async function handleRemoveProductFromWishlist() {
    // console.log(item.products._id, userToken);
    const data = await deleteProductFromWishlist(item.products._id, userToken);
    if (data.status === "success") {
      //   handleSetWishlist(false);
      console.log("removed ", item.products._id);
      console.log("data LEFT", data);
      handleSetWishlists(data);
    }
  }

  return (
    <Box
      component="div"
      id="desc-btns"
      sx={{
        display: "flex",
        // flexWrap: "wrap",
        padding: "2rem 0 0 14rem",
        position: "relative",
        margin: "2rem 0",
      }}
    >
      <Box component="div" id="desc" sx={{}}>
        <Stack spacing={2}>
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
            {item.products.name}
          </Typography>
          <Typography component="p" sx={{ fontSize: "1rem" }}>
            Product Id: {item.products._id}
          </Typography>
          <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "3rem",
              }}
            >
              <Typography
                component="p"
                sx={{ marginRight: "2rem", fontSize: "1.1rem" }}
              >
                ₹{item.products.price.toFixed(2)}
              </Typography>
              <Typography
                component="p"
                sx={{ textDecoration: "line-through", fontSize: "1.1rem" }}
              >
                ₹{(item.products.price * 1.15).toFixed(2)}
              </Typography>
            </Box>
            <Box component="div">
              <StyledRating
                value={item.products.ratings}
                readOnly
                precision={0.1}
                size="small"
              />
            </Box>
          </Box>

          <Box
            component="div"
            sx={{
              "& .addtoCart:hover": {
                border: "1px solid #12daa8",
                backgroundColor: "#12daa8",
              },
            }}
          >
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
                marginRight: 2,
              }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
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
                marginRight: 2,
              }}
              onClick={handleRemoveProductFromWishlist}
            >
              Delete
            </Button>
          </Box>
        </Stack>
      </Box>

      <Box
        component="div"
        sx={{ position: "absolute", top: "2rem", left: "2rem" }}
      >
        <CardMedia
          component="img"
          src={item.products.displayImage}
          alt="image"
          height="120"
          width="120"
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
      </Box>
    </Box>
  );
}

export default WishlistCard;

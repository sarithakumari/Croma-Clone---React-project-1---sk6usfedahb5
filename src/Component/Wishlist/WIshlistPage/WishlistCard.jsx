import styled from "@emotion/styled";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { addToCart } from "../../../helper/addToCart";
import { removeProductFromCartApi } from "../../../helper/removeProductFromCartApi";
import CromaContext from "../../../ContextAPI/CromaContext";
import { deleteProductFromWishlist } from "../../../helper/deleteProductFromWishlist";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00e9bf",
  },
});

function WishlistCard({ item }) {

  const { handleItemsInCart, handleSetWishlists, userToken } = useContext(CromaContext);
  const navigate = useNavigate();

  async function handleAddToCart() {
    const data = await addToCart(item.products._id, userToken);
    console.log(data);
    if (data.status === "success") {
      toast.success(data.message);
      handleItemsInCart(data.data.items.length);
    }
  }

  async function handleRemoveProductFromWishlist() {
    const data = await deleteProductFromWishlist(item.products._id, userToken);
    if (data.status === "success") {
      toast.success(data.message);
      handleSetWishlists(data);
    }
  }

  return (
    <Box
      component="div"
      id="desc-btns"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        padding: {
          lg: "2rem 0 0 16rem",
          md: "2rem 0 0 16rem",
          sm: "12rem 0 0 2rem",
          xs: "12rem 0 0 2rem",
        },
        // padding: "2rem 0 0 14rem",
        // padding: "12rem 0 0 2rem",
        position: "relative",
        margin: "1rem 0",
        width: "100%",
      }}
    >
      <Box component="div" id="desc" sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <CardActionArea
            disableRipple
            onClick={() => navigate(`/product/${item.products._id}`)}
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
              {item.products.name}
            </Typography>
          </CardActionArea>

          <Typography
            component="p"
            sx={{
              fontSize: { lg: "16px", md: "16px", sm: "12px", xs: "12px" },
            }}
          >
            Product Id: {item.products._id}
          </Typography>

          <Box
            component="div"
            sx={{
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "3rem",
              }}
            >
              <Typography
                component="p"
                sx={{
                  marginRight: "2rem",
                  fontSize: { lg: "16px", md: "16px", sm: "12px", xs: "12px" },
                }}
              >
                ₹{item.products.price.toLocaleString(navigator.language, {minimumFractionDigits: 2})}
              </Typography>
              <Typography
                component="p"
                sx={{
                  textDecoration: "line-through",
                  fontSize: { lg: "16px", md: "16px", sm: "12px", xs: "12px" },
                }}
              >
                ₹{(item.products.price * 1.15).toLocaleString(navigator.language, {minimumFractionDigits: 2})}
              </Typography>
            </Box>
          </Box>
          <Box component="div">
            <StyledRating
              value={item.products.ratings}
              readOnly
              precision={0.1}
              size="small"
            />
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
                marginBottom: 2,
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
                marginBottom: 2,
              }}
              onClick={handleRemoveProductFromWishlist}
            >
              Delete
            </Button>
          </Box>
        </Stack>

        <Divider sx={{ borderColor: "#353535" }} />
      </Box>

      <Box
        component="div"
        sx={{ position: "absolute", top: "2rem", left: "2rem" }}
      >
        <CardActionArea
          disableRipple
          onClick={() => navigate(`/product/${item.products._id}`)}
        >
          <CardMedia
            component="img"
            src={item.products.displayImage}
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
    </Box>
  );
}

export default WishlistCard;

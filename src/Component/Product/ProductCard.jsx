import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Toolbar,
  Typography,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Wishlist from "../Wishlist/Wishlist";
import { addProductToWishlist } from "../../helper/addProductToWishlist";
import CromaContext from "../../ContextAPI/CromaContext";
import { deleteProductFromWishlist } from "../../helper/deleteProductFromWishlist";
import { toast } from "react-toastify";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00e9bf",
  },
});

function ProductCard({ product }) {
  const [wishlist, setWishlist] = useState(false);
  const navigate = useNavigate();

  const { handleOpenAuthDialog, wishlists, userToken } = useContext(CromaContext);

  useEffect(() => {
    const isWishlisted =
      wishlists?.data?.items?.filter(
        (item, index) => item.products._id === product._id
      ).length > 0
        ? true
        : false;
    console.log(isWishlisted);
    setWishlist(isWishlisted)
  }, []);

  async function handleWishlistAdd() {
    if (!userToken) {
      handleOpenAuthDialog();
    } else {
      const data = await addProductToWishlist(product._id, userToken);
      // console.log(data);
      if (data.status === "success") {
        handleSetWishlist(true);
        toast.success(data.message);
        // console.log("wishlisted ", product._id);
      }
    }
  }

  async function handleWishlistRemove() {
    const data = await deleteProductFromWishlist(product._id, userToken);
    if (data.status === "success") {
      handleSetWishlist(false);
      toast.success(data.message);
    }
    // console.log("removed ", product._id);
  }

  function handleSetWishlist(value) {
    setWishlist(value);
  }

  // console.log("card", product );

  return (
    <Toolbar
      sx={{
        maxWidth: 350,
        height: 420,
        flexDirection: "column",
        bgcolor: "black",
        borderRadius: 1.5,
        // justifyContent: "center",
        margin: "1rem auto",
        // borderBottom: "1px solid #f6f6f6",
      }}
    >
      <Box
        component="div"
        sx={{
          height: 250,
          width: 250,
          m: 1,
          position: "relative",
          padding: "0.5rem 1rem",
        }}
      >
        <CardActionArea
          disableRipple
          // onClick={() => alert(`productId is : ${product._id}`)}
          onClick={() => navigate(`/product/${product._id}`)}
        >
          <CardMedia
            component="img"
            src={product.displayImage}
            alt={product.brand}
            height="250"
            width="250"
            loading="lazy"
            sx={{
              objectFit: "contain",
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg";
            }}
          />
        </CardActionArea>
      </Box>

      <Box
        component="div"
        sx={{
          p: 2,
          position: "absolute",
          top: 1,
          right: 1,
          "&:hover .fav-icon": {
            color: "#00e9bf",
          },
          "& .fav-icon-filled>path": {
            color: "#00e9bf",
          },
        }}
      >
        <Wishlist
          productId={product._id}
          handleWishlistAdd={handleWishlistAdd}
          handleWishlistRemove={handleWishlistRemove}
          wishlist={wishlist}
          handleSetWishlist={handleSetWishlist}
        />
      </Box>

      <CardActionArea
        disableRipple
        // onClick={() => alert("redirect to product page")}
        onClick={() => navigate(`/product/${product._id}`)}
      >
        <CardContent sx={{}}>
          <Typography
            sx={{
              fontWeight: 700,
              mb: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "2",
            }}
          >
            {product.name}
          </Typography>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            ₹
            {product.price.toLocaleString(navigator.language, {
              minimumFractionDigits: 2,
            })}
          </Typography>
          <Typography
            component="span"
            sx={{
              fontWeight: 300,
              fontSize: "small",
              textDecoration: "line-through",
              color: "grey",
            }}
          >
            ₹
            {(1.15 * product.price).toLocaleString(navigator.language, {
              minimumFractionDigits: 2,
            })}
          </Typography>
          <Box component="div" padding="0.5rem 0">
            <StyledRating
              name="readOnly"
              value={product.ratings}
              precision={0.1}
              readOnly
              size="small"
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Toolbar>
  );
}

export default ProductCard;

// https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1681112708/Croma%20Assets/Communication/Mobiles/Images/270909_k1wgvp.png?tr=w-480

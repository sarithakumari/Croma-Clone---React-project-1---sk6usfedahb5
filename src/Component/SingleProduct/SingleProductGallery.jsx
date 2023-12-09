import React, { useState } from "react";

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import { Box, CardActionArea } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Wishlist from "../Wishlist/Wishlist";
import { addProductToWishlist } from "../../helper/addProductToWishlist";
import { deleteProductFromWishlist } from "../../helper/deleteProductFromWishlist";

function SingleProductGallery({ images, productId }) {
  const [wishlist, setWishlist] = useState(false);

  const userToken = JSON.parse(localStorage.getItem("userToken"));

  async function handleWishlistAdd() {
    const data = await addProductToWishlist(productId, userToken);
    console.log(data);
    if (data.status === "success") {
      handleSetWishlist(true);
    }
    console.log("wishlisted ", productId);
  }

  async function handleWishlistRemove() {
    const data = await deleteProductFromWishlist(productId, userToken);
    if (data.status === "success") {
      handleSetWishlist(false);
    }
    console.log("removed ", productId);
  }

  function handleSetWishlist(value) {
    setWishlist(value);
  }

  return (
    <div
      id="productImageGallery"
      style={{
        marginTop: "5rem",
        position: "relative",
        borderBottom: "1px solid #3d3a3a",
      }}
    >
      <ImageGallery
        items={images}
        thumbnailPosition="left"
        slideOnThumbnailOver
        showFullscreenButton={false}
        showPlayButton={false}
        slideDuration={200}
        // slideInterval={5000}
        // startIndex={3}
      />
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
        {/* <CardActionArea disableRipple onClick={() => alert("fav clicked")}>
          <FavoriteBorderOutlinedIcon
            className="fav-icon"
            sx={{ transition: "all 0.3s ease" }}
          />
        </CardActionArea> */}
        <Wishlist
          productId={productId}
          handleWishlistAdd={handleWishlistAdd}
          handleWishlistRemove={handleWishlistRemove}
          wishlist={wishlist}
          handleSetWishlist={handleSetWishlist}
        />
      </Box>
    </div>
  );
}

export default SingleProductGallery;

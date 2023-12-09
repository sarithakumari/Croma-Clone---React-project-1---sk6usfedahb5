import { CardActionArea } from "@mui/material";
import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import { FavoriteIcon } from "@mui/icons-material/Favorite";
// import { FaHeart } from "react-icons/fa6";

function Wishlist({
  productId,
  handleWishlistAdd,
  handleWishlistRemove,
  wishlist,
  handleSetWishlist,
}) {
  return (
    <>
      {wishlist ? (
        <CardActionArea disableRipple onClick={handleWishlistRemove}>
          <FavoriteIcon
            className="fav-icon-filled"
            sx={{ transition: "all 0.3s ease" }}
          />
        </CardActionArea>
      ) : (
        <CardActionArea disableRipple onClick={handleWishlistAdd}>
          <FavoriteBorderOutlinedIcon
            className="fav-icon"
            sx={{ transition: "all 0.3s ease" }}
          />
        </CardActionArea>
      )}
    </>
  );
}

export default Wishlist;

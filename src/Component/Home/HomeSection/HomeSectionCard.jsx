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
import CromaContext from "../../../ContextAPI/CromaContext";
import { addProductToWishlist } from "../../../helper/addProductToWishlist";
import { deleteProductFromWishlist } from "../../../helper/deleteProductFromWishlist";
import Wishlist from "../../Wishlist/Wishlist";
import { toast } from "react-toastify";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00e9bf",
  },
  "& .MuiRating-iconEmpty": {
    color: "grey",
  },
});

function HomeSectionCard({ cardInfo }) {
  // console.log("cardinfo: ", cardInfo);
  const [wishlist, setWishlist] = useState(false);

  const { displayImage, name, price, ratings, subCategory, _id } = cardInfo;
  const navigate = useNavigate();

  const userToken = JSON.parse(localStorage.getItem("userToken"));

  const { handleOpenAuthDialog, wishlists } = useContext(CromaContext);

  useEffect(() => {
    const isWishlisted =
      wishlists?.data?.items?.filter(
        (item, index) => item.products._id === cardInfo._id
      ).length > 0
        ? true
        : false;
    // console.log(isWishlisted);
    setWishlist(isWishlisted);
  }, [wishlists]);

  async function handleWishlistAdd() {
    if (!userToken) {
      handleOpenAuthDialog();
    } else {
      const data = await addProductToWishlist(_id, userToken);
      console.log(data);
      if (data.status === "success") {
        handleSetWishlist(true);
        toast.success(data.message);
      }
    }
  }

  async function handleWishlistRemove() {
    const data = await deleteProductFromWishlist(_id, userToken);
    if (data.status === "success") {
      handleSetWishlist(false);
      console.log("removed ", _id);
    }
  }

  function handleSetWishlist(value) {
    setWishlist(value);
  }

  return (
    <Toolbar
      sx={{
        width: { lg: 250, md: 250, sm: 200, xs: 200 },
        flexDirection: "column",
        bgcolor: "black",
        borderRadius: 1.5,
      }}
    >
      <Box
        component="div"
        sx={{
          height: { lg: 200, md: 200, sm: 100, xs: 100 },
          // width: { lg: 200, md: 200, sm: 100, xs: 100 },
          m: 1,
          position: "relative",
        }}
      >
        <CardActionArea
          disableRipple
          // onClick={() => alert("redirect to product page")}
          onClick={() => navigate(`/product/${_id}`)}
        >
          <CardMedia
            component="img"
            src={displayImage}
            alt={subCategory}
            height="200"
            width="200"
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
        {/* <CardActionArea disableRipple onClick={() => alert("fav clicked")}>
          <FavoriteBorderOutlinedIcon
            className="fav-icon"
            sx={{ transition: "all 0.3s ease" }}
          />
        </CardActionArea> */}
        <Wishlist
          productId={_id}
          handleWishlistAdd={handleWishlistAdd}
          handleWishlistRemove={handleWishlistRemove}
          wishlist={wishlist}
          handleSetWishlist={handleSetWishlist}
        />
      </Box>

      <CardActionArea
        disableRipple
        // onClick={() => alert("redirect to product page")}
        onClick={() => navigate(`/product/${_id}`)}
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
            {name}
          </Typography>

          <Box>
            <Typography component="span" sx={{ fontWeight: 700 }}>
              ₹{price.toLocaleString(navigator.language, {
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
              {(price * 1.15).toLocaleString(navigator.language, {
                minimumFractionDigits: 2,
              })}
            </Typography>
          </Box>

          <StyledRating
            name="cardRatings"
            value={ratings}
            precision={0.1}
            readOnly
            // readOnly={ratings ? true : false}
            // disabled={!ratings ? true : false}
            size="small"
          />
        </CardContent>
      </CardActionArea>
    </Toolbar>
  );
}

export default HomeSectionCard;

// https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1681112708/Croma%20Assets/Communication/Mobiles/Images/270909_k1wgvp.png?tr=w-480

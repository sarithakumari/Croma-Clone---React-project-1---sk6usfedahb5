import React from "react";
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

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00e9bf",
  },
  "& .MuiRating-iconEmpty": {
    color: "grey",
  },
});

function HomeSectionCard({ cardInfo }) {
  console.log("cardinfo: ", cardInfo);
  const { displayImage, name, price, ratings, subCategory } = cardInfo;

  return (
    <Toolbar
      sx={{
        maxWidth: 280,
        flexDirection: "column",
        bgcolor: "black",
        borderRadius: 1.5,
      }}
    >
      <Box
        component="div"
        sx={{ height: 200, width: 200, m: 1, position: "relative" }}
      >
        <CardActionArea
          disableRipple
          onClick={() => alert("redirect to product page")}
        >
          <CardMedia
            component="img"
            src={displayImage}
            alt={subCategory}
            height="200"
            width="200"
            sx={{
              objectFit: "contain",
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
        }}
      >
        <CardActionArea disableRipple onClick={() => alert("fav clicked")}>
          <FavoriteBorderOutlinedIcon
            className="fav-icon"
            sx={{ transition: "all 0.3s ease" }}
          />
        </CardActionArea>
      </Box>

      <CardActionArea
        disableRipple
        onClick={() => alert("redirect to product page")}
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
              WebkitLineClamp: "2"
            }}
          >
            {name}
          </Typography>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            ₹{price.toFixed(2)}
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
            ₹{(price * 1.15).toFixed(2)}
          </Typography>
          <StyledRating
            name="cardRatings"
            value={ratings}
            precision={0.5}
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

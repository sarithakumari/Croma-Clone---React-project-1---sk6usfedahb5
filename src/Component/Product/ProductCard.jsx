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
});

function ProductCard({ params }) {
  console.log("params from productcard", params);
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
        <CardActionArea disableRipple onClick={() => alert("redirect to product page")}>
          <CardMedia
            component="img"
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1681112708/Croma%20Assets/Communication/Mobiles/Images/270909_k1wgvp.png?tr=w-480"
            alt="mobile"
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
          <Typography sx={{ fontWeight: 700, mb: 1 }}>
            Redmi Note 12 (6GB RAM, 64GB, Sunrise Gold)
          </Typography>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            ₹11,999.00
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
            ₹18,999.00
          </Typography>
          <StyledRating
            name="readOnly"
            value="3.5"
            precision={0.5}
            readOnly
            size="small"
          />
        </CardContent>
      </CardActionArea>
    </Toolbar>
  );
}

export default ProductCard;

// https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1681112708/Croma%20Assets/Communication/Mobiles/Images/270909_k1wgvp.png?tr=w-480

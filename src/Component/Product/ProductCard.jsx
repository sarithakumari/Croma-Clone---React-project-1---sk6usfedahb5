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

function ProductCard({ product }) {
  // console.log("card", product );
  return (
    <Toolbar
      sx={{
        maxWidth: 350,
        height: 500,
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
        sx={{ height: 300, width: 300, m: 1, position: "relative", padding: "0.5rem 1rem" }}
      >
        <CardActionArea disableRipple onClick={() => alert("redirect to product page")}>
          <CardMedia
            component="img"
            src={product.displayImage}
            alt={product.brand}
            height="250"
            width="250"
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
          <Typography sx={{
              fontWeight: 700,
              mb: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "2"
            }} >
            {product.name}
          </Typography>
          <Typography component="span" sx={{ fontWeight: 700 }}>
            ₹{product.price.toFixed(2)}
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
            ₹{(1.15*product.price).toFixed(2)}
          </Typography>
          <Box component='div' padding="0.5rem 0" >
            <StyledRating
            name="readOnly"
            value={product.ratings}
            precision={0.5}
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

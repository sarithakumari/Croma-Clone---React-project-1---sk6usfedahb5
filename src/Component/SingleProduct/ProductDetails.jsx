import styled from "@emotion/styled";
import { Box, CardActionArea, Link, Rating, Typography } from "@mui/material";
import React from "react";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00e9bf",
    fontSize: "14px",
  },
});

function ProductDetails({
  productDetails,
  productRatingReviews,
  productFeatures,
}) {
  return (
    <Box
    component='div'
      id="productDetails"
      sx={{
        marginTop: {lg: "5rem", md: "5rem", sm: "3rem", xs: "2rem"},
        marginLeft: {lg: "2rem", md: "2rem", sm: "0", xs: "0"},
        // border: "1px solid white",
        padding: "0 10px 10px",
      }}
    >
      <Typography component="div" sx={{fontWeight: "500", fontSize: {lg: "2rem", md: "1.75rem", sm: "1.5rem", xs: "1rem"}}}>
        {productDetails?.name}
      </Typography>

      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 0.2,
          margin: "10px 0",
          color: "#00e9bf",
        }}
      >
        {productRatingReviews ? (
          <>
            <Typography component="div" sx={{fontSize: {lg: "14px", md: "14px", sm: "12px", xs: "10px"}}}>
              {productDetails?.ratings.toFixed(1)}
            </Typography>

            <StyledRating readOnly max={1} defaultValue={1} size="small" />

            <Link href="#productReviews" color="inherit">
              <Typography
                component="div"
                sx={{ textDecoration: "underline", marginLeft: "5px", fontSize: {lg: "14px", md: "14px", sm: "12px", xs: "10px"} }}
              >
                ({productRatingReviews?.length} Ratings &{" "}
                {productRatingReviews?.length} Reviews)
              </Typography>
            </Link>
          </>
        ) : (
          <Typography
            variant="body2"
            component="div"
            sx={{ textDecoration: "underline", marginLeft: "5px", fontSize: {lg: "14px", md: "14px", sm: "12px", xs: "10px"} }}
          >
            (Be the First One to Review)
          </Typography>
        )}
      </Box>

      <Box component="div" id="productPrice">
        <Box component="div">
          <Typography component="span" sx={{ fontWeight: "500", fontSize: {lg: "2rem", md: "1.75rem", sm: "1.5rem", xs: "1rem"} }}>
            {" "}
            ₹{" "}
          </Typography>
          <Typography component="span" sx={{ fontWeight: "500", fontSize: {lg: "2rem", md: "1.75rem", sm: "1.5rem", xs: "1rem"} }}>
            {" "}
            {productDetails?.price.toLocaleString(navigator.language, {
              minimumFractionDigits: 2,
            })}{" "}
          </Typography>
        </Box>

        <Typography variant="body2" component="div" sx={{ fontSize: {lg: "14px", md: "14px", sm: "12px", xs: "10px"} }}>
          {" "}
          (Incl. all taxes.){" "}
        </Typography>
      </Box>

      <Box
        component="div"
        id="productFeatures"
        sx={{
          marginTop: 4,
          border: "1px solid #3d3a3a",
          padding: "0 0 1rem 1rem",
        }}
      >
        {productFeatures.length>0 ? (
          <>
            <Box component="div" sx={{ padding: "1rem 0" }}>
              <Typography variant="body2" component="div" sx={{fontSize: {lg: "14px", md: "14px", sm: "14px", xs: "14px"}}}>
                Key Features
              </Typography>
            </Box>

            <Box
              component="div"
              sx={{
                fontFamily: "inherit",
                fontSize: {lg: "14px", md: "14px", sm: "12px", xs: "12px"},
                paddingRight: "1rem",
                lineHeight: 1.5,
              }}
            >
              <ul style={{ marginLeft: "1rem" }}>
                {productFeatures.map((feature, index) => (
                  <li key={index}> {feature} </li>
                ))}
              </ul>
            </Box>
          </>
        ) : (
          <CardActionArea disableRipple component="a" href="#overview" >
            <Box component="div" sx={{ padding: "1rem 0" }}>
              <Typography variant="body2" component="div">
                Click to Scroll Down
              </Typography>
            </Box>
          </CardActionArea>
        )}
      </Box>
    </Box>
  );
}

export default ProductDetails;

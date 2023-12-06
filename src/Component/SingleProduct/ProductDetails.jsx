import styled from "@emotion/styled";
import { Box, Link, Rating, Typography } from "@mui/material";
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
    <div
      id="productDetails"
      style={{
        marginTop: "5rem",
        marginLeft: "2rem",
        // border: "1px solid white",
        padding: "0 10px 10px",
      }}
    >
      <Typography variant="h5" component="div">
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
            <Typography component="div" fontSize="14px">
              {productDetails?.ratings.toFixed(1)}
            </Typography>

            <StyledRating readOnly max={1} defaultValue={1} size="small" />

            <Link href="#productReviews" color="inherit" >
              <Typography
                variant="body2"
                component="div"
                sx={{ textDecoration: "underline", marginLeft: "5px" }}
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
            sx={{ textDecoration: "underline", marginLeft: "5px" }}
          >
            (Be the First One to Review)
          </Typography>
        )}
      </Box>

      <Box component="div" id="productPrice">
        <Box component="div">
          <Typography variant="h5" component="span" sx={{ fontWeight: "500" }}>
            {" "}
            ₹{" "}
          </Typography>
          <Typography variant="h5" component="span" sx={{ fontWeight: "500" }}>
            {" "}
            {productDetails?.price.toFixed(2)}{" "}
          </Typography>
        </Box>

        <Typography variant="body2" component="div" sx={{ fontSize: "12px" }}>
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
        <Box component="div" sx={{ padding: "1rem 0" }}>
          <Typography variant="body2" component="div">
            Key Features
          </Typography>
        </Box>

        <Box
          component="div"
          sx={{
            fontFamily: "inherit",
            fontSize: "15px",
            lineHeight: 1.5,
          }}
        >
          <ul style={{ marginLeft: "1rem" }}>
            {productFeatures.map((feature, index) => (
              <li key={index}> {feature} </li>
            ))}
          </ul>
        </Box>
      </Box>
    </div>
  );
}

export default ProductDetails;

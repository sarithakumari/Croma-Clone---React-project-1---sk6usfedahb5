import { Accordion, AccordionDetails, AccordionSummary, Box, Rating, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import styled from "@emotion/styled";
import CustomerReview from "./CustomerReview";

const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#00e9bf",
      fontSize: "14px",
    },
  });

function ProductReviewRating({ productDetails, productRatingReviews }) {
    // console.log('ratings', productRatingReviews);
  return (
    <Box
      component="div"
      id="reviews"
      sx={{
        marginTop: 5,
        marginBottom: 12,
        border: "1px solid #3d3a3a",
        borderRadius: 1,
      }}
    >
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: "transparent",
          color: "inherit",
          "& > .MuiSvgIcon-root": {
            backgroundColor: "transparent",
            color: "inherit",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="productReviews"
          id="productReviews"
        >
          <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "700", marginRight: 1 }}
            >
              Reviews
            </Typography>
            <Typography
              component="div"
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: 0,
                color: "#00e9bf",
              }}
            >
              {productDetails?.ratings.toFixed(1)}
              <StyledRating
                defaultValue={1}
                max={1}
                readOnly
                sx={{ fontSize: "18px" }}
              />
            </Typography>
          </Box>
        </AccordionSummary>

        <AccordionDetails>
            {productRatingReviews?.map((review)=> (
                <CustomerReview key={review._id} review={review} />
            ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default ProductReviewRating;

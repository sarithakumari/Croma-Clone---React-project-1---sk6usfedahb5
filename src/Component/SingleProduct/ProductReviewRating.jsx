import { Accordion, AccordionDetails, AccordionSummary, Box, Rating, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import styled from "@emotion/styled";

const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#00e9bf",
      fontSize: "14px",
    },
  });

function ProductReviewRating({ productDetails, productRatingReviews }) {
  return (
    <Box
      component="div"
      id="reviews"
      sx={{
        marginTop: 5,
        border: "1px solid #3d3a3a",
        borderRadius: 1,
      }}
    >
      <Accordion
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
              {productDetails?.ratings}
              <StyledRating
                defaultValue={1}
                max={1}
                readOnly
                sx={{ fontSize: "18px" }}
              />
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>{productRatingReviews?.length}</AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default ProductReviewRating;

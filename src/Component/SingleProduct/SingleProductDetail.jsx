import React, { useEffect, useState } from "react";
import { singleProductDetail } from "../../helper/singleProductDetail";
import { useParams } from "react-router-dom";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";

import SingleProductGallery from "./SingleProductGallery";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";
import { singleProductRatingReview } from "../../helper/singleProductRatingReview";
import ProductDetails from "./ProductDetails";
import ProductOverview from "./ProductOverview";
import ProductReviewRating from "./ProductReviewRating";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00e9bf",
    fontSize: "14px",
  },
});

function SingleProductDetail() {
  const [productDetails, setProductDetails] = useState(null);
  const [productImages, setProductImages] = useState([]);
  const [productFeatures, setProductFeatures] = useState([]);
  const [productRatingReviews, setProductRatingReview] = useState(null);
  const { productID } = useParams();

  useEffect(() => {
    singleProductDetail(productID).then((data) => {
      setProductDetails(data);
      setProductImages(data.images);
      setProductFeatures(data.features);
    });
    singleProductRatingReview(productID).then((data) =>
      setProductRatingReview(data)
    );
  }, []);

  const images = productImages.map((image) => {
    return {
      original: image,
      thumbnail: image,
      originalHeight: "100%",
    };
  });

  // console.log("ratings from singleproductdetails", productRatingReviews);
  // console.log("details from singleproductdetails", productDetails);
  // console.log("features from singleproductdetails", productFeatures);
  // console.log('images from singleproductdetails', productImages)
  // console.log("images: ", images);

  return (
    <Container maxWidth="lg">
      <Grid container>
        {/* Product Gallery */}
        <Grid item md={6} sm={12}>
          <SingleProductGallery images={images} />
        </Grid>

        {/* Product Details */}
        <Grid item md={6} sm={12}>
          <ProductDetails
            productDetails={productDetails}
            productRatingReviews={productRatingReviews}
            productFeatures={productFeatures}
          />
        </Grid>
      </Grid>

      {/* Product Overview Accordion */}
      <ProductOverview productDetails={productDetails} />

      {/* Product Review-Rating Accordion */}
      <ProductReviewRating productDetails={productDetails} productRatingReviews={productRatingReviews} />
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
    </Container>
  );
}

export default SingleProductDetail;

/* <div style={{marginTop: "3rem"}}>
        <ImageGallery items={images} thumbnailPosition='left' slideOnThumbnailOver />
      </div> */

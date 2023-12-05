import React, { useEffect, useState } from "react";
import { singleProductDetail } from "../../helper/singleProductDetail";
import { useParams } from "react-router-dom";

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CardActionArea,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SingleProductGallery from "./SingleProductGallery";
import styled from "@emotion/styled";
import { singleProductRatingReview } from "../../helper/singleProductRatingReview";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00e9bf",
    fontSize: "14px",
  },
});

// const StyledAccordion = styled(Accordion)({
//   "& > .MuiPaper-root": {
//     backgroundColor: "black",
//   }
// })

function SingleProductDetail() {
  const [productDetails, setProductDetails] = useState(null);
  const [productImages, setProductImages] = useState([]);
  const [productFeatures, setProductFeatures] = useState([]);
  const [productRatingReviews, setProductRatingReview] = useState(null);
  // const [productDescription, setProductDescription] = useState(null);
  const { productID } = useParams();

  useEffect(() => {
    singleProductDetail(productID).then((data) => {
      setProductDetails(data);
      setProductImages(data.images);
      setProductFeatures(data.features);
      // setProductDescription(data.description);
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

  const productDescription = `${productDetails?.description}`

  // console.log("ratings from singleproductdetails", productRatingReviews);
  // console.log("details from singleproductdetails", productDetails);
  // console.log("features from singleproductdetails", productFeatures);
  // console.log('images from singleproductdetails', productImages)
  // console.log("images: ", images);

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item md={6} sm={12}>
          <SingleProductGallery images={images} />
        </Grid>

        <Grid item md={6} sm={12}>
          <div
            id="productDetails"
            style={{
              marginTop: "5rem",
              marginLeft: "2rem",
              // border: "1px solid white",
              padding: "10px",
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

                  <StyledRating
                    readOnly
                    max={1}
                    defaultValue={1}
                    size="small"
                  />

                  <Typography
                    variant="body2"
                    component="div"
                    sx={{ textDecoration: "underline", marginLeft: "5px" }}
                  >
                    ({productRatingReviews?.length} Ratings &{" "}
                    {productRatingReviews?.length} Reviews)
                  </Typography>
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
                <Typography
                  variant="h5"
                  component="span"
                  sx={{ fontWeight: "500" }}
                >
                  {" "}
                  ₹{" "}
                </Typography>
                <Typography
                  variant="h5"
                  component="span"
                  sx={{ fontWeight: "500" }}
                >
                  {" "}
                  {productDetails?.price}{" "}
                </Typography>
              </Box>

              <Typography
                variant="body2"
                component="div"
                sx={{ fontSize: "12px" }}
              >
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
        </Grid>
      </Grid>

      <Box
        component="div"
        id="overview"
        sx={{
          marginTop: 5,
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
            aria-controls="productOverview"
            id="productOverview"
          >
            <Typography>Overview</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component='div' >
              {productDescription}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}

export default SingleProductDetail;

/* <div style={{marginTop: "3rem"}}>
        <ImageGallery items={images} thumbnailPosition='left' slideOnThumbnailOver />
      </div> */

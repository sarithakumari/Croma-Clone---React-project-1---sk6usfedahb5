import React, { useEffect, useState } from "react";
import { singleProductDetail } from "../../helper/singleProductDetail";
import { useParams } from "react-router-dom";

import { Container, Grid } from "@mui/material";

import SingleProductGallery from "./SingleProductGallery";
import { singleProductRatingReview } from "../../helper/singleProductRatingReview";
import ProductDetails from "./ProductDetails";
import ProductOverview from "./ProductOverview";
import ProductReviewRating from "./ProductReviewRating";
import ProductFooter from "./ProductFooter";

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
      {/* Product Gallery and details */}
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
      <ProductReviewRating
        productDetails={productDetails}
        productRatingReviews={productRatingReviews}
      />

      {/* Product Footer - Buy/Add to cart button */}
      <ProductFooter productDetails={productDetails} />
    </Container>
  );
}

export default SingleProductDetail;

/* <div style={{marginTop: "3rem"}}>
        <ImageGallery items={images} thumbnailPosition='left' slideOnThumbnailOver />
      </div> */

import React, { useEffect, useState } from "react";
import { singleProductDetail } from "../../helper/singleProductDetail";
import { useParams } from "react-router-dom";

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import { Box, CardActionArea, Container, Grid } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SingleProductGallery from "./SingleProductGallery";

function SingleProductDetail() {
  const [productDetails, setProductDetails] = useState(null);
  const [productImages, setProductImages] = useState([]);
  const { productID } = useParams();

  useEffect(() => {
    singleProductDetail(productID).then((data) => {
      setProductDetails(data);
      setProductImages(data.images);
    });
  }, []);

  const images = productImages.map((image) => {
    return {
      original: image,
      thumbnail: image,
      originalHeight: "100%"
    };
  });

  // console.log('details from singleproductdetails', product)
  // console.log('images from singleproductdetails', productImages)
  console.log("images: ", images);

  return (
    <Container maxWidth="lg">
      <Grid container>

        <Grid item md={6} sm={12}>
          <SingleProductGallery images={images} />
        </Grid>

        <Grid item md={6} sm={12}>
          <div
            id="productDetails"
            style={{ marginTop: "5rem", border: "1px solid white" }}
          >

          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SingleProductDetail;

/* <div style={{marginTop: "3rem"}}>
        <ImageGallery items={images} thumbnailPosition='left' slideOnThumbnailOver />
      </div> */

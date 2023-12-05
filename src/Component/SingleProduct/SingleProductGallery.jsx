import React from "react";

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import { Box, CardActionArea } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";


function SingleProductGallery({images}) {
  return (
    <div
      id="productImageGallery"
      style={{ marginTop: "5rem", position: "relative", borderBottom: "1px solid #3d3a3a" }}
    >
      <ImageGallery
        items={images}
        thumbnailPosition="left"
        slideOnThumbnailOver
        showFullscreenButton={false}
        showPlayButton={false}
        slideDuration={200}
        // slideInterval={5000}
        // startIndex={3}

      />
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
    </div>
  );
}

export default SingleProductGallery;

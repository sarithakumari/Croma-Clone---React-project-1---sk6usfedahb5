import { Card, CardMedia } from "@mui/material";
import React from "react";

function ProductBanner({ imagePath, title }) {
  return (
    <Card>
      <CardMedia
        component="img"
        src={imagePath}
        alt="title"
        sx={{
          aspectRatio: "128/35"
        }}
        onError={(e) =>
          (e.target.onerror = null)(
            (e.target.src =
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg")
          )
        }
      />
    </Card>
  );
}

export default ProductBanner;

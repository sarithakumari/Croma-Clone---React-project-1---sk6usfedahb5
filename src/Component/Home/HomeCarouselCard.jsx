import React from "react";
import { Card, CardMedia } from "@mui/material";

function HomeCarouselCard({ image, alt }) {
  return (
    <Card
      style={{
        width: "100px",
        backgroundColor: "black",
        // marginRight: "20px",
      }}
    >
      <CardMedia
        height="130"
        component="img"
        src={image}
        alt={alt}
        style={{
          objectFit: "contain",
          paddingTop: "1rem",
        }}
      />
    </Card>
  );
}

export default HomeCarouselCard;

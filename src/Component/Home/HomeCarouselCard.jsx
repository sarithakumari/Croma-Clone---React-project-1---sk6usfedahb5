import React from "react";
import { Card, CardMedia, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


function HomeCarouselCard({ image, alt }) {
  return (
    <Card
      style={{
        width: "100px",
        backgroundColor: "black",
        // marginRight: "20px",
      }}
    >
        <Link component={RouterLink} to='/cart' >
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
        </Link>
      
    </Card>
  );
}

export default HomeCarouselCard;

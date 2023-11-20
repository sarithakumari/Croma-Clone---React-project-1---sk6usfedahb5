import React from "react";
import { Card, CardMedia, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


function HomeCarouselCard({ image, alt, pathTo }) {
  return (
    <Card
      elevation={0}
      style={{
        width: "100px",
        backgroundColor: "black",
        // marginRight: "20px",
      }}
    >
        <Link component={RouterLink} to={pathTo} >
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

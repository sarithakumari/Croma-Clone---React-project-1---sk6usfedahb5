import React from "react";
import { Card, CardMedia, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


function HomeCarouselCard({ image, alt, pathTo }) {
  return (
    <Card
      elevation={0}
      style={{
        width: "125px",
        backgroundColor: "rgb(25,25,25)",
        marginTop: "20px",
      }}
    >
        <Link component={RouterLink} to={pathTo} >
            <CardMedia
                height="160"
                component="img"
                src={image}
                alt={alt}
                style={{
                    objectFit: "contain",
            }}
        />
        </Link>
      
    </Card>
  );
}

export default HomeCarouselCard;

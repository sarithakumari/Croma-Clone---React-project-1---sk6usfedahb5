import React from "react";
import { Card, CardMedia, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function AlbumCard({ image, alt, pathTo }) {
  return (
    <Card
      elevation={0}
      style={{
        width: {lg: "125px", md: "100px", sm: "80px", xs: "60px"},
        backgroundColor: "rgb(25,25,25)",
        marginTop: "20px",
      }}
    >
      <Link component={RouterLink} to={pathTo}>
        <CardMedia
          component="img"
          src={image}
          alt={alt}
          sx={{
            objectFit: "contain",
            height: {lg: "160px", md: "100px", sm: "80px"}
          }}
        />
      </Link>
    </Card>
  );
}

export default AlbumCard;

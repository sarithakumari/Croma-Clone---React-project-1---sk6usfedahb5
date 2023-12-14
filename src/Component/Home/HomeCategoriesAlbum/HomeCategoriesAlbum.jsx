import { Container } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { categoriesAlbums } from "../../../../public/categoriesAlbums";
import AlbumCard from "./AlbumCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 8,
    slidesToSlide: 7,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 6,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 800, min: 500 },
    items: 5,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 3,
    slidesToSlide: 2,
  },
};

function HomeCategoriesAlbum() {
  return (
    <Container maxWidth="lg">
      <Carousel
        responsive={responsive}
        renderArrowsWhenDisabled={true}
        renderButtonGroupOutside={true}
        customTransition="transform 500ms ease-in-out"
      >
        {categoriesAlbums.map((list, index) => (
          <AlbumCard
            key={index}
            image={list.imagePath}
            alt={list.title}
            pathTo={list.path}
          />
        ))}
      </Carousel>
    </Container>
  );
}

export default HomeCategoriesAlbum;

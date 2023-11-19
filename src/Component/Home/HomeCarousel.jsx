import { Container, Link } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselLists } from "../../../public/carouselLists";
import { Link as RouterLink } from "react-router-dom";
import HomeCarouselCard from "./HomeCarouselCard";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 8,
    slidesToSlide: 7
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 8,
    slidesToSlide: 7
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function HomeCarousel() {
  return (
    <Container maxWidth="lg">
      <Carousel responsive={responsive} customTransition="transform 500ms ease-in-out"  >
        {carouselLists.map((list) => (
          
            <HomeCarouselCard image={list.imagePath} alt={list.title} />
          
        ))}
      </Carousel>
    </Container>
  );
}

export default HomeCarousel;

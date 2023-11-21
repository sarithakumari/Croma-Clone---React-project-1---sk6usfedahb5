import { Container, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselLists } from "../../../../public/carouselLists";
import HomeCarouselCard from "./HomeCarouselCard";
import { productDataApi } from "../../../helper/productDataApi";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 8,
    slidesToSlide: 7
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 6,
    slidesToSlide: 5
  },
  tablet: {
    breakpoint: { max: 800, min: 600 },
    items: 5,
    slidesToSlide: 4
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 3,
    slidesToSlide: 2
  },
};

function HomeCarousel() {

  return (
    <Container maxWidth="lg">
      <Carousel responsive={responsive} renderArrowsWhenDisabled={true} renderButtonGroupOutside={true} customTransition="transform 500ms ease-in-out"  >
        {carouselLists.map((list, index) => (
          
            <HomeCarouselCard key={index} image={list.imagePath} alt={list.title} pathTo={list.path} />
          
        ))}
      </Carousel>
      {/* {state?.map((product, index)=> (
        <div key={index}>{product.subCategory == 'washingMachine' && product.brand == 'Samsung' ? (
          <div>
            <h1> {index}. {product.name} </h1>
            <h3> {product.brand} </h3>
            <CardMedia component='img' src={product.displayImage} height='360' style={{objectFit: "contain"}} />
          </div>
          
        ):''}</div>
      ))} */}
    </Container>
  );
}

export default HomeCarousel;

import { Container } from "@mui/material";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselLists } from "../../../../public/carouselLists";
import { Link as RouterLink } from "react-router-dom";
import HomeCarouselCard from "./HomeCarouselCard";

const URL = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products`;

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
    items: 5,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 2
  },
};

function HomeCarousel() {

  useEffect(()=>{
    fetchData();
  }, [])

  async function fetchData() {
    try {
      const res = await fetch(URL, {
      method: "GET",
      headers: {
        "projectID": "sk6usfedahb5"
      }
      });
      const data = await res.json();
      console.log(data);
    } catch(error) {
      console.error('error in fetching data', error.message)
    }
  }

  return (
    <Container maxWidth="lg">
      <Carousel responsive={responsive} renderArrowsWhenDisabled={true} renderButtonGroupOutside={true} customTransition="transform 500ms ease-in-out"  >
        {carouselLists.map((list, index) => (
          
            <HomeCarouselCard key={index} image={list.imagePath} alt={list.title} pathTo={list.path} />
          
        ))}
      </Carousel>
    </Container>
  );
}

export default HomeCarousel;

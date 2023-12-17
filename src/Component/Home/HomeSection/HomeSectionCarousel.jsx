import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeSectionCard from "./HomeSectionCard";
import { Box } from "@mui/material";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
    slidesToSlide: 2,
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

function HomeSectionCarousel({ sectionArr }) {
  return (
    <Box
      component="div"
      sx={{
        "& li": {
          width: {
            lg: "280px!important",
            md: "280px!important",
            sm: "280px!important",
            xs: "250px!important",
          },
          margin: "auto 0.5rem"
        },
      }}
    >
      <Carousel
        responsive={responsive}
        renderArrowsWhenDisabled={true}
        renderButtonGroupOutside={true}
        customTransition="transform 300ms ease-in-out"
      >
        {sectionArr.map((deal, index) => (
          <HomeSectionCard key={index} cardInfo={deal} />
        ))}
      </Carousel>
    </Box>
  );
}

export default HomeSectionCarousel;

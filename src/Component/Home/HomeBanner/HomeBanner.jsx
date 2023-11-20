import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeBannerCard from "./HomeBannerCard";
import { homeBannerLists } from "../../../../public/homeBannerLists";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function HomeBanner() {
  return (
    <Carousel showDots autoPlay infinite responsive={responsive}>
      {homeBannerLists.map((list) => (
        <HomeBannerCard
          key={list.id}
          imagePath={list.imagePath}
          title={list.title}
          imageURL={list.imageURL}
        />
      ))}
    </Carousel>
  );
}

export default HomeBanner;
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeSectionCard from './HomeSectionCard';
import ProductCard from '../../Product/ProductCard';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
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

function HomeSectionCarousel({ dealsDayArr }) {
  
  return (
    <Carousel responsive={responsive} renderArrowsWhenDisabled={true} renderButtonGroupOutside={true} customTransition="transform 500ms ease-in-out" >
      
      {
        dealsDayArr.map((deal)=>(
          <HomeSectionCard cardInfo={deal} />
        ))
      }
      
    </Carousel>
  )
}

export default HomeSectionCarousel
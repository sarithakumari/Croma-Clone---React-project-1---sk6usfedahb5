import React, { useEffect, useState } from "react";
import HomeCategoriesAlbum from "./HomeCategoriesAlbum/HomeCategoriesAlbum";
import HomeBanner from "./HomeBanner/HomeBanner";
import { Box, Stack } from "@mui/material";
import { productDataApi } from "../../helper/productDataApi";
import HomeSection from "./HomeSection/HomeSection";

function Home() {
  const [dealsDayArr, setDealsDayArr] = useState([]);
  const [trendingArr, setTrendingArr] = useState([]);
  const [mobilesArr, setMobileArr] = useState([]);
  const [laptopArr, setLaptopArr] = useState([]);
  const [tvArr, setTvArr] = useState([]);
  const [refrigeratorsArr, setRefrigeratorsArr] = useState([]);
  const [audioArr, setAudioArr] = useState([]);

  const [errorImg, seterrorImg] = useState("");
  const dummyURL = `https://dummy-img-link.com`;

  useEffect(() => {
    (function dummyURL() {
      async function preCheckFunction(data) {
        let arr = data.map(async (prod) => {
          await fetch(prod.displayImage).then((res) => {
            if (res.status === 200) {
              return prod;
            } else {
              prod.displayImage = dummyURL;
              return prod;
            }
          });
        });
        return arr;
      }
    preCheckFunction();
    })();

    

    // productDataApi(632).then((data)=>{
    //   setDealsDayArr(data.slice(0, 6));
    //   setTrendingArr(data.filter((product)=>product.sellerTag == 'trending').slice(0, 9));
    //   setMobileArr(data.filter((product)=>product.subCategory == 'mobile').slice(0, 15));
    //   setLaptopArr(data.filter((product)=>product.subCategory == 'laptop').slice(0, 9));
    //   setTvArr(data.filter((product)=>product.subCategory == 'tv').slice(0, 5));
    //   setRefrigeratorsArr(data.filter((product)=>product.subCategory == 'refrigerator').slice(2, 10));
    //   setAudioArr(data.filter((product)=>product.subCategory == 'audio').slice(0, 9));
    // })
  }, []);

  console.log(refrigeratorsArr);

  return (
    <Stack
      spacing={4}
      style={{ marginTop: "60px", width: "100vw", justifyContent: "center" }}
    >
      <HomeBanner />

      <Box component="div">
        <HomeCategoriesAlbum />
      </Box>

      <Box component="div" id="Deals Of The Day">
        <HomeSection
          sectionHeading="Deals of the Day"
          sectionArr={dealsDayArr}
        />
      </Box>

      <Box component="div" id="Top Trending Deals">
        <HomeSection
          sectionHeading="Top Trending Deals"
          sectionArr={trendingArr}
        />
      </Box>

      <Box component="div" id="Deals on Mobiles">
        <HomeSection
          sectionHeading="Deals on Mobiles"
          sectionArr={mobilesArr}
        />
      </Box>

      <Box component="div" id="Deals on Laptops">
        <HomeSection sectionHeading="Deals on Laptops" sectionArr={laptopArr} />
      </Box>

      <Box component="div" id="Deals on Audio">
        <HomeSection sectionHeading="Deals on Audio" sectionArr={audioArr} />
      </Box>

      <Box component="div" id="Deals on TVs">
        <HomeSection sectionHeading="Deals on TVs" sectionArr={tvArr} />
      </Box>

      <Box component="div" id="Deals on Refrigerators">
        <HomeSection
          sectionHeading="Deals on Refrigerators"
          sectionArr={refrigeratorsArr}
        />
      </Box>
    </Stack>
  );
}

export default Home;

// add preCheckFunction - make the api call to fetch the img - check what was the result - if something else it would replace it with something
// productDataApi(6).then(data => setDealsDayArr(data));
// productDataApi(100).then(data => setTrendingArr(
//   data.filter((product)=>product.sellerTag == 'trending').slice(1, 9)
//   ));
// productDataApi(200).then(data => setMobileArr(
//   data.filter((product) => product.subCategory == 'mobile').slice(0, 15)
// ));
// productDataApi(200).then(data => setLaptopArr(
//   data.filter((product) => product.subCategory == 'laptop').slice(0, 9)
// ));
// productDataApi(200).then(data => setTvArr(
//   data.filter((product) => product.subCategory == 'tv').slice(0, 5)
// ));
// productDataApi(400).then(data => setRefrigeratorsArr(
//   data.filter((product) => product.subCategory == 'refrigerator').slice(2, 10)
// ));

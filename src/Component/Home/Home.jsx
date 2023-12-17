import React, { useEffect, useState } from 'react'
import HomeCategoriesAlbum from './HomeCategoriesAlbum/HomeCategoriesAlbum'
import HomeBanner from './HomeBanner/HomeBanner'
import { Box, Stack } from "@mui/material";
import { productDataApi } from '../../helper/productDataApi';
import HomeSection from './HomeSection/HomeSection';
import { dealsDataApi } from '../../helper/dealsDataApi';
import { trendingDataApi } from '../../helper/trendingDataApi';
import { dealsProductDataApi } from '../../helper/dealsProductDataApi';


function Home() {

  const [dealsDayArr, setDealsDayArr] = useState([]);
  const [trendingArr, setTrendingArr] = useState([]);
  const [mobilesArr, setMobileArr] = useState([]);
  const [laptopArr, setLaptopArr] = useState([]);
  const [tvArr, setTvArr] = useState([]);
  const [refrigeratorsArr, setRefrigeratorsArr ] = useState([]);
  const [audioArr, setAudioArr ] = useState([]);
  const [acArr, setAcArr ] = useState([]);
  const [healthArr, setHealthArr ] = useState([]);
  const [kitchenAppliancesArr, setKitchenAppliancesArr ] = useState([]);
  const [tabletArr, setTabletArr ] = useState([]);
  const [travelArr, setTravelArr ] = useState([]);
  const [washingMachineArr, setWashingMachineArr ] = useState([]);
  
  useEffect(()=>{
    dealsDataApi().then(data => setDealsDayArr(data));
    trendingDataApi().then(data => setTrendingArr(data));
    dealsProductDataApi("mobile").then(data => setMobileArr(data));
    dealsProductDataApi("laptop").then(data => setLaptopArr(data));
    dealsProductDataApi("tv").then(data => setTvArr(data));
    dealsProductDataApi("refrigerator").then(data => setRefrigeratorsArr(data));
    dealsProductDataApi("audio").then(data => setAudioArr(data));

    dealsProductDataApi("ac").then(data => setAcArr(data));
    dealsProductDataApi("health").then(data => setHealthArr(data));
    dealsProductDataApi("kitchenappliances").then(data => setKitchenAppliancesArr(data));
    dealsProductDataApi("tablet").then(data => setTabletArr(data));
    dealsProductDataApi("travel").then(data => setTravelArr(data));
    dealsProductDataApi("washingMachine").then(data => setWashingMachineArr(data));
      
  }, [])

  
  return (
    <Stack spacing={4} style={{marginTop: "60px", width: "100vw", justifyContent: "center"}}>
      
      <HomeBanner />

      <Box component='div' >
        <HomeCategoriesAlbum />
      </Box>

      <Box component='div' id='Deals Of The Day' >
        <HomeSection sectionHeading="Deals of the Day" sectionArr={dealsDayArr} />
      </Box>

      <Box component='div' id='Top Trending Deals' >
        <HomeSection sectionHeading="Top Trending Deals" sectionArr={trendingArr} />
      </Box>
      
      <Box component='div' id='Deals on Mobiles' >
        <HomeSection sectionHeading="Deals on Mobiles" sectionArr={mobilesArr} />
      </Box>
      
      <Box component='div' id='Deals on Laptops' >
        <HomeSection sectionHeading="Deals on Laptops" sectionArr={laptopArr} />
      </Box>
      
      <Box component='div' id='Deals on Audio' >
        <HomeSection sectionHeading="Deals on Audio" sectionArr={audioArr} />
      </Box>

      <Box component='div' id='Deals on TVs' >
        <HomeSection sectionHeading="Deals on TVs" sectionArr={tvArr} />
      </Box>
      
      <Box component='div' id='Deals on Refrigerators' >
        <HomeSection sectionHeading="Deals on Refrigerators" sectionArr={refrigeratorsArr} />
      </Box>
      
      <Box component='div' id='Deals on ACs' >
        <HomeSection sectionHeading="Deals on ACs" sectionArr={acArr} />
      </Box>
      
      <Box component='div' id='Deals on Health' >
        <HomeSection sectionHeading="Deals on Health Care" sectionArr={healthArr} />
      </Box>
      
      <Box component='div' id='Deals on Kitchen Appliances' >
        <HomeSection sectionHeading="Deals on Kitchen Appliances" sectionArr={kitchenAppliancesArr} />
      </Box>
      
      <Box component='div' id='Deals on Tablets' >
        <HomeSection sectionHeading="Deals on Tablets" sectionArr={tabletArr} />
      </Box>
      
      <Box component='div' id='Deals on Travel Accessories' >
        <HomeSection sectionHeading="Deals on Travel Accessories" sectionArr={travelArr} />
      </Box>
      
      <Box component='div' id='Deals on Washing Machine' >
        <HomeSection sectionHeading="Deals on Washing Machine" sectionArr={washingMachineArr} />
      </Box>

    </Stack>
  )
}

export default Home



// add preCheckFunction - make the api call to fetch the img - check what was the result - if something else it would replace it with something

  // (function dummyURL() {
  //   async function preCheckFunction(data) {
  //     let arr = data.map(async (prod) => {
  //       await fetch(prod.displayImage).then((res) => {
  //         if (res.status === 200) {
  //           return prod;
  //         } else {
  //           prod.displayImage = dummyURL;
  //           return prod;
  //         }
  //       });
  //     });
  //     return arr;
  //   }
  // preCheckFunction();
  // })();
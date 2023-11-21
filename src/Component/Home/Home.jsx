import React, { useEffect, useState } from 'react'
import HomeCarousel from './HomeCategoriesCarousel/HomeCarousel'
import HomeBanner from './HomeBanner/HomeBanner'
import { Box, Stack } from "@mui/material";
import { productDataApi } from '../../helper/productDataApi';
import HomeSection from './HomeSection/HomeSection';


function Home() {

  const [dealsDayArr, setDealsDayArr] = useState([]);

  useEffect(()=>{
    productDataApi(6).then(data => setDealsDayArr(data));
  }, [])
  
  return (
    <Stack spacing={4} style={{marginTop: "60px", width: "100vw", justifyContent: "center"}}>
      
      <HomeBanner />

      <Box component='div' >
        <HomeCarousel />
      </Box>

      <Box component='div' id='Deals Of The Day' >
        <HomeSection dealsDayArr={dealsDayArr} />
      </Box>

      {/* <Box component='div' id='Top Trending Deals' >
        <HomeSection />
      </Box> */}

    </Stack>
  )
}

export default Home
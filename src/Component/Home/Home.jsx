import React from 'react'
import HomeCarousel from './HomeCategoriesCarousel/HomeCarousel'
import HomeBanner from './HomeBanner/HomeBanner'
import { Box } from "@mui/material";


function Home() {
  return (
    <Box component='div' spacing={4} style={{marginTop: "60px", width: "100vw"}}>
      
      <HomeBanner />

      <HomeCarousel />
    </Box>
  )
}

export default Home
import React from 'react'
import HomeCarousel from './HomeCarousel'
import HomeBanner from './HomeBanner'

function Home() {
  return (
    <div style={{marginTop: "60px"}}>
      
      <HomeBanner />

      <HomeCarousel />
    </div>
  )
}

export default Home
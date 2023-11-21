import React from 'react'
import HomeSectionHeader from './HomeSectionHeader'
import { Container } from '@mui/material'
import HomeSectionCarousel from './HomeSectionCarousel'

function HomeSection({ dealsDayArr }) {
  return (
    <Container maxWidth='lg'>
        <HomeSectionHeader />

        <HomeSectionCarousel dealsDayArr={dealsDayArr} />
    </Container>
  )
}

export default HomeSection
import React from 'react'
import HomeSectionHeader from './HomeSectionHeader'
import { Container } from '@mui/material'
import HomeSectionCarousel from './HomeSectionCarousel'

function HomeSection() {
  return (
    <Container maxWidth='lg'>
        <HomeSectionHeader />

        <HomeSectionCarousel />
    </Container>
  )
}

export default HomeSection
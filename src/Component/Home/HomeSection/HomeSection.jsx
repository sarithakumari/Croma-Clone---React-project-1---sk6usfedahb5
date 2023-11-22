import React from 'react'
import HomeSectionHeader from './HomeSectionHeader'
import { Container } from '@mui/material'
import HomeSectionCarousel from './HomeSectionCarousel'

function HomeSection({ sectionHeading, sectionArr }) {
  return (
    <Container maxWidth='lg'>
        <HomeSectionHeader sectionHeading={sectionHeading} />

        <HomeSectionCarousel sectionArr={sectionArr} />
    </Container>
  )
}

export default HomeSection
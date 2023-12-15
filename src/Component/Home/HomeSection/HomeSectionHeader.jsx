import { Toolbar, Typography } from '@mui/material'
import React from 'react'

function HomeSectionHeader({ sectionHeading }) {
  return (
    <Toolbar style={{
        padding: '0px',
        alignItems: 'flex-end'
    }} >
        <Typography component='div' sx={{mb: 1, fontSize: {lg: "1.5rem", md: "1.5rem"}}} >{sectionHeading}</Typography>
    </Toolbar>
  )
}

export default HomeSectionHeader
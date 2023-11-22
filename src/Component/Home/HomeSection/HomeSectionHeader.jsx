import { Toolbar, Typography } from '@mui/material'
import React from 'react'

function HomeSectionHeader({ sectionHeading }) {
  return (
    <Toolbar style={{
        padding: '0px',
        alignItems: 'flex-end'
    }} >
        <Typography variant='h5' component='div' sx={{mb: 1}} >{sectionHeading}</Typography>
    </Toolbar>
  )
}

export default HomeSectionHeader
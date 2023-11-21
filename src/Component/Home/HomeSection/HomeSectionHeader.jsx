import { Toolbar, Typography } from '@mui/material'
import React from 'react'

function HomeSectionHeader() {
  return (
    <Toolbar style={{
        padding: '0px',
        alignItems: 'flex-end'
    }} >
        <Typography variant='h5' component='div' sx={{mb: 1}} >Deals of the Day</Typography>
    </Toolbar>
  )
}

export default HomeSectionHeader
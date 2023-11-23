import { Box, Typography } from '@mui/material'
import React from 'react'

function ProductHeader({heading}) {
  return (
    <Box component='div' id='productHeading' style={{padding: "1rem 0"}} >
        <Typography variant='h5' component='p' sx={{mt: 9.3}} > {heading} </Typography>
    </Box>
  )
}

export default ProductHeader;
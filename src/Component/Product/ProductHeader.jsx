import { Box, Typography } from '@mui/material'
import React from 'react'

function ProductHeader({ heading, productsFound=0 }) {
  return (
    <Box component='div' id='productHeading' style={{padding: "1rem 0", paddingTop: "5rem" }} >
        <Typography variant='h4' component='p' display='inline-block' fontWeight='700' mr={1} > {heading} </Typography>
        <Typography variant='body2' component='p' display='inline-block' fontSize='small'  > ({productsFound}) </Typography>
    </Box>
  )
}

export default ProductHeader;
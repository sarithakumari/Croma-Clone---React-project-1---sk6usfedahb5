import { CardMedia } from '@mui/material';
import React from 'react'

function ProductBanner({ imagePath, title }) {
  return (
    <CardMedia component='img' src={imagePath} alt='title' />
  )
}

export default ProductBanner;
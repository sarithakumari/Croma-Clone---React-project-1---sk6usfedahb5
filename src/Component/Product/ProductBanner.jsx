import { Card, CardMedia } from '@mui/material';
import React from 'react'

function ProductBanner({ imagePath, title }) {
  return (
    <Card>
        <CardMedia component='img' src={imagePath} alt='title' />
    </Card>
  )
}

export default ProductBanner;
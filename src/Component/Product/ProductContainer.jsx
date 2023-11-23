import { Box, Grid } from '@mui/material';
import React from 'react'
import ProductCard from './ProductCard';

function ProductContainer({ productData }) {
    console.log("data from container", productData);
    
  return (
    <Box sx={{flexGrow: 1}} >
        <Grid container spacing={2} >
            <Grid item md={6} lg={4} >
                <ProductCard />
            </Grid>
            <Grid item md={6} lg={4} >
                <ProductCard />
            </Grid>
            <Grid item md={6} lg={4} >
                <ProductCard />
            </Grid>
            <Grid item md={6} lg={4} >
                <ProductCard />
            </Grid>
        </Grid>
    </Box>
  )
}

export default ProductContainer
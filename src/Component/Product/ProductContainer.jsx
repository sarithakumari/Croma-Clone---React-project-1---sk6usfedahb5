import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

function ProductContainer({ productData }) {
  // console.log("data from container", productData);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {productData?.map((data) => (
          <Grid key={data._id} item md={4} lg={3} sm={6} xs={12}>
            
            <ProductCard product={data} />
            
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductContainer;

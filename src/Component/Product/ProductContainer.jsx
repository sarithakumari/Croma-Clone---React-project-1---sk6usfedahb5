import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

function ProductContainer({ productData }) {
  // console.log("data from container", productData);

  return (
    <Box sx={{ flexGrow: 1, }}>
      <Grid container spacing={1} >
        {productData.map((data) => (
          <Grid key={data._id} item md={6} lg={4} xs={12} >
            <ProductCard product={data} />
            {/* <Divider  variant="middle" sx={{borderColor: 'rgba(255, 255, 255, 0.5)'}} /> */}
          </Grid>
        ))}

        {/* <Grid item md={6} lg={4} >
                <ProductCard />
            </Grid>
            <Grid item md={6} lg={4} >
                <ProductCard />
            </Grid>
            <Grid item md={6} lg={4} >
                <ProductCard />
            </Grid> */}

      </Grid>
    </Box>
  );
}

export default ProductContainer;

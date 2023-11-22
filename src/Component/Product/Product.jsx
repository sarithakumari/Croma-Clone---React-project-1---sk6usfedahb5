import React from 'react'
import ProductCard from './ProductCard'
import { useParams } from 'react-router-dom'

function Product() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <ProductCard params={params} />

    </>
    
  )
}

export default Product


{/* <h1 style={{marginTop: "60px"}} >
      Product
    </h1> */}
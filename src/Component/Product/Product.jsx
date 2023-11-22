import React from 'react'
import ProductCard from './ProductCard'
import { useParams } from 'react-router-dom'
import ProductPage from './ProductPage';

function Product() {
  const { productName } = useParams();
  // console.log(params);
  return (
    <>
      <ProductPage productName={productName} />
      {/* <ProductCard productName={productName} /> */}

    </>
    
  )
}

export default Product


{/* <h1 style={{marginTop: "60px"}} >
      Product
    </h1> */}
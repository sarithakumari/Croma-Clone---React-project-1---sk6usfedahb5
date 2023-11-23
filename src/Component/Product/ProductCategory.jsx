import React from 'react'
import { useParams } from 'react-router-dom'

function ProductCategory({ productData }) {
    const { productName } = useParams();
    console.log("params from productPage", productName);
    console.log("dataaa", productData);
  return (
    <div style={{marginTop: "70px"}}>{productName}</div>
  )
}

export default ProductCategory
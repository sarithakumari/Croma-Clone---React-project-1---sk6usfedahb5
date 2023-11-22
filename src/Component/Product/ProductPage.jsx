import React from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {
    const { productName } = useParams();
    console.log("params from productPage", productName);
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage
import React, { useEffect, useState } from 'react'
import { singleProductDetail } from '../../helper/singleProductDetail'
import { useParams } from 'react-router-dom'

function SingleProductDetail() {
    const [product, setProduct] = useState(null);
    const {productID} = useParams();

    useEffect(()=>{
        singleProductDetail(productID).then(data => setProduct(data));
    },[])
    
  return (
    <div style={{marginTop: "9rem"}}>{product?.name}</div>
  )
}

export default SingleProductDetail
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { subCategoriesApi } from '../../helper/subCategoriesApi';
import { productsPage } from '../../../public/productsPage';
import ProductHeader from './ProductHeader';
import { Container } from '@mui/material';
import ProductBanner from './ProductBanner';
import ProductContainer from './ProductContainer';

function Product() {
  // productData - array of products based on category - mobile, tv, etc.
  // productsPage.js - array of objects - each obj -   banner image of individual category of products
  // productInfo - has the object obtained from productsPage.js after filtering the title==productName
  
  const [productData, setProductData] = useState([]);
  const [productInfo, setProductInfo] = useState(null);
  const { productName } = useParams();
  // console.log('productname', productName);
  
  useEffect(()=>{
    subCategoriesApi(productName).then(data => setProductData(data));
    const data = productsPage.filter((product) => product.title == productName)
    setProductInfo(data[0]);
  }, [productName])

  // console.log(productData)
  // console.log(productInfo)

  return (
    <>
      <Container maxWidth='lg' >
        <ProductHeader heading={productInfo?.heading} productsFound={productData.length} />
      </Container>
      <ProductBanner imagePath={productInfo?.imagePath} title={productInfo?.title} />
      <Container maxWidth='lg' >
        
        <ProductContainer productData={productData}  />
      </Container>
    </>
    
  )
}

export default Product
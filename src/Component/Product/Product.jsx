import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useParams } from 'react-router-dom'
import { subCategoriesApi } from '../../helper/subCategoriesApi';
import ProductCategory from './ProductCategory';
import { productsPage } from '../../../public/productsPage';
import ProductHeader from './ProductHeader';
import { Container } from '@mui/material';
import ProductBanner from './ProductBanner';
import ProductContainer from './ProductContainer';

function Product() {

  const [productData, setProductData] = useState([]);
  const [productInfo, setProductInfo] = useState(null);
  const { productName } = useParams();
  console.log('productname', productName);
  
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
        <ProductHeader heading={productInfo?.heading} />
      </Container>
      <ProductBanner imagePath={productInfo?.imagePath} title={productInfo?.title} />
      <Container maxWidth='lg' >
        <ProductContainer productData={productData}  />
      </Container>
    </>
    
  )
}

export default Product
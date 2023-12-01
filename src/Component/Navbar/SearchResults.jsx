import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { searchProductsApi } from '../../helper/searchProductsApi';
import { Container } from '@mui/material';
import ProductHeader from '../Product/ProductHeader';
import ProductContainer from '../Product/ProductContainer';

function SearchResults() {

    const [searchParam, setSearchParam] = useSearchParams();
    const [searchResults, setSearchResults] = useState([]);
    console.log(searchParam.get("search"));
    // const searchItem = searchParam.get("search");

    useEffect(()=>{
        searchProductsApi(searchParam.get("search")).then(data => setSearchResults(data));
    }, [searchParam])

  return (
    <>
        {/* <div style={{marginTop: "9rem"}}>Results for "{searchParam.get("search")}" ({searchResults?searchResults.length:0}) </div> */}
        <Container maxWidth='lg' >
            <ProductHeader heading={`Results for ${searchParam.get("search")}`} productsFound={searchResults?.length} />
        </Container>
        <Container maxWidth='lg' >
        
            <ProductContainer productData={searchResults}  />
        </Container>

    </>
  )
}

export default SearchResults
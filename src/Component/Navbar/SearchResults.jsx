import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { searchProductsApi } from '../../helper/searchProductsApi';

function SearchResults() {

    const [searchParam, setSearchParam] = useSearchParams();
    const [searchResults, setSearchResults] = useState([]);
    console.log(searchParam.get("search"));
    const searchItem = searchParam.get("search");

    useEffect(()=>{
        searchProductsApi(searchItem).then(data => setSearchResults(data));
    }, [searchParam])

  return (
    <>
        <div style={{marginTop: "9rem"}}>Results for "{searchParam.get("search")}" ({searchResults?searchResults.length:0}) </div>

    </>
  )
}

export default SearchResults
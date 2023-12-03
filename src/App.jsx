import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Product from "./Component/Product/Product";
import Cart from "./Component/Cart/Cart"
import Navbar from "./Component/Navbar/Navbar";
import { createTheme } from "@mui/material";
import Grid from '@mui/material/Grid';

import { categories } from "../public/categories";
import Footer from "./Component/Footer/Footer";
import SearchResults from "./Component/Navbar/SearchResults";
import SingleProductDetail from "./Component/SingleProduct/SingleProductDetail";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
          <Grid container direction="column" style={{height: "999px"}} >

            <Grid item>
              <Navbar />
            </Grid>

            <Grid item >
              <Routes>

                <Route index element={<Home />} />

                {
                  categories.map((category, index) => (
                    // <Route key={index} path={category.path} element={ <Product />} />
                    <Route key={index} path={`/:productName`} element={ <Product />} />
                  ))
                }
                
                <Route path='/product/:productID' element={<SingleProductDetail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/searchB' element={<SearchResults />} />

              </Routes>
            </Grid>
            
            <Grid item style={{marginTop: "auto"}} >
              {/* <Footer /> */}
            </Grid>
          </Grid>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;


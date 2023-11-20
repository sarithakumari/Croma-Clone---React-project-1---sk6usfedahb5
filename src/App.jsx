import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Product from "./Component/Product/Product";
import Cart from "./Component/Cart/Cart"
import Navbar from "./Component/Navbar/Navbar";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { categories } from "../public/categories";
import Footer from "./Component/Footer/Footer";

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
                    <Route key={index} path={category.path} element={ <Product />} />
                  ))
                }
                
                <Route path='/cart' element={<Cart />} />

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


import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Product from "./Component/Product/Product";
import Navbar from "./Component/Navbar/Navbar";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material";

import { categories } from "../public/categories";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <React.Fragment>
      {/* <CssBaseline enableColorScheme /> */}
      <Container maxWidth="lg">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />

            {
              categories.map((category) => (
                <Route path={category.path} element={ <Product />} />
              ))
            }
            
          </Routes>
        </BrowserRouter>
      </Container>
    </React.Fragment>
  );
}

export default App;


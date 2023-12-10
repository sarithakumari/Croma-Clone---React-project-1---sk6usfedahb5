import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Product from "./Component/Product/Product";
import Cart from "./Component/Cart/Cart";
import Navbar from "./Component/Navbar/Navbar";

import { createTheme } from "@mui/material";
import Grid from "@mui/material/Grid";

import { categories } from "../public/categories";
import SearchResults from "./Component/Navbar/SearchResults";
import SingleProductDetail from "./Component/SingleProduct/SingleProductDetail";
import CromaContext from "./ContextAPI/CromaContext";
import Wishlists from "./Component/Wishlist/WIshlistPage/Wishlists";
import Checkout from "./Component/Checkout/Checkout";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  // openAuthDialog state to open the login/signup form DIALOG
  const [openAuthDialog, setOpenAuthDialog] = useState(false);
  // itemsInCart will be the total No. of items added to Cart
  const [itemsInCart, setItemsInCart] = useState('');

  function handleOpenAuthDialog() {
    setOpenAuthDialog(true);
  }

  function handleCloseAuthDialog() {
    setOpenAuthDialog(false);
  }

  function handleItemsInCart(items) {
    setItemsInCart(items);
  }

  return (
    <React.Fragment>
      <CromaContext.Provider
        value={{
          openAuthDialog,
          handleOpenAuthDialog,
          handleCloseAuthDialog,
          itemsInCart,
          handleItemsInCart,
        }}
      >
        <BrowserRouter>
          <Grid
            container
            direction="column"
            sx={{ pointerEvents: openAuthDialog ? "none" : "auto" }}
          >
            <Grid item>
              <Navbar />
            </Grid>

            <Grid item>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />

                {categories.map((category, index) => (
                  // <Route key={index} path={category.path} element={ <Product />} />
                  <Route
                    key={index}
                    path={`/:productName`}
                    element={<Product />}
                  />
                ))}

                <Route
                  path="/product/:productID"
                  element={<SingleProductDetail />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/searchB" element={<SearchResults />} />
                <Route path="/wishlists" element={<Wishlists />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </Grid>
          </Grid>
        </BrowserRouter>
      </CromaContext.Provider>
    </React.Fragment>
  );
}

export default App;

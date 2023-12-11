import React, { useEffect, useState } from "react";
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
import Payment from "./Component/Payment/Payment";
import { getCartItemApi } from "./helper/getCartItemsApi";
import { getAllProductFromWishlist } from "./helper/getAllProductFromWishlist";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const username = JSON.parse(localStorage.getItem("username")) || "";

  // openAuthDialog state to open the login/signup form DIALOG
  const [openAuthDialog, setOpenAuthDialog] = useState(false);
  // itemsInCart will be the total No. of items added to Cart
  const [itemsInCart, setItemsInCart] = useState("");
  // cartProducts - state for all products in cart
  const [cartProducts, setCartProducts] = useState(null);
  // address - user address in checkout and payment page
  const [address, setAddress] = useState({
    country: "",
    pincode: "",
    street: "",
    landmark: "",
    locality: "",
    state: "",
    city: "",
  });
  // address type (home, office, other) - in checkout and payment page
  const [addressType, setAddressType] = useState("");
  // name - state for name of the user
  const [name, setName] = useState(username);
  // wishlists - state for all items wishlisted
  const [wishlists, setWishlists] = useState(null);

  const userToken = JSON.stringify(localStorage.getItem("userToken"));

  useEffect(() => {
    getCartItemApi(userToken).then((data) => {
      // console.log(data);
      handleSetCartProducts(data.data);
    });
  }, []);

  useEffect(() => {
    getAllProductFromWishlist(userToken).then((data) => setWishlists(data));
  }, []);

  function handleOpenAuthDialog() {
    // open login/signup authDialog
    setOpenAuthDialog(true);
  }

  function handleCloseAuthDialog() {
    // close login/signup authDialog
    setOpenAuthDialog(false);
  }

  function handleItemsInCart(items) {
    // state-setter for items in cart
    setItemsInCart(items);
  }

  function handleSetCartProducts(data) {
    // state-setter - all products in cart
    setCartProducts(data);
  }

  function handleSetAddress(e) {
    // state setter - user address in checkout.jsx
    const { name, value } = e.target;
    // console.log(name, value);
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAddressType(e) {
    setAddressType(e.target.innerText);
  }

  function handleSetName(e) {
    setName(e.target.value);
  }

  function handleSetWishlists(data) {
    setWishlists(data);
  }

  // console.log("APP: ", cartProducts);

  return (
    <React.Fragment>
      <CromaContext.Provider
        value={{
          openAuthDialog,
          handleOpenAuthDialog,
          handleCloseAuthDialog,
          itemsInCart,
          handleItemsInCart,
          cartProducts,
          handleSetCartProducts,
          address,
          handleSetAddress,
          addressType,
          handleAddressType,
          name,
          handleSetName,
          wishlists,
          handleSetWishlists,
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
                <Route path="/searchB" element={<SearchResults />} />
                <Route path="/wishlists" element={<Wishlists />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment" element={<Payment />} />
              </Routes>
            </Grid>
          </Grid>
        </BrowserRouter>
      </CromaContext.Provider>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Product from "./Component/Product/Product";
import Navbar from "./Component/Navbar/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material";

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
            <Route path="product" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </React.Fragment>
  );
}

export default App;

// export default function SimpleContainer() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
//       </Container>
//     </React.Fragment>
//   );
// }

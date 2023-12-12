import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { getAllProductFromWishlist } from "../../../helper/getAllProductFromWishlist";
import styled from "@emotion/styled";
import WishlistCard from "./WishlistCard";
import CromaContext from "../../../ContextAPI/CromaContext";
import WishlistEmpty from "./WishlistEmpty";


function Wishlists() {
  // const [wishlists, setWishlists] = useState(null);
  const { wishlists, handleSetWishlists} = useContext(CromaContext);

  const userToken = JSON.parse(localStorage.getItem("userToken"));

  useEffect(() => {
    getAllProductFromWishlist(userToken).then((data) => handleSetWishlists(data));
  }, []);

  console.log(wishlists?.data?.items);

  if(wishlists?.data?.items.length === 0) {
    return (
      <WishlistEmpty />
    )
  }

  return (
    <Box flexGrow={1} sx={{ paddingTop: "6rem" }}>
      <Container maxWidth="lg">
        <>
          <Typography
            variant="h5"
            component="p"
            sx={{ fontWeight: "700", borderRadius: 1, padding: "1rem 0" }}
          >
            My WishList
          </Typography>
          <Divider sx={{borderColor: "#353535"}} />
          <Box sx={{ marginTop: 1, width: "100%" }}>
            {wishlists?.data?.items?.map((item, index) => (
              <WishlistCard key={index} item={item} />
            ))}
          </Box>
        </>
      </Container>
    </Box>
  );
}

export default Wishlists;

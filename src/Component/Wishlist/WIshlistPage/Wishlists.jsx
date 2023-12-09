import {
  Box,
  Button,
  CardMedia,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { getAllProductFromWishlist } from "../../../helper/getAllProductFromWishlist";
import styled from "@emotion/styled";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00e9bf",
  },
});

function Wishlists() {
  const [wishlists, setWishlists] = useState(null);

  const userToken = JSON.parse(localStorage.getItem("userToken"));

  useEffect(() => {
    getAllProductFromWishlist(userToken).then((data) => setWishlists(data));
  }, []);

  console.log(wishlists?.data.items);

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

          <Box sx={{ marginTop: 1, width: "100%" }}>
            {wishlists?.data.items.map((item, index) => (
              <Box
                key={index}
                component="div"
                id="desc-btns"
                sx={{
                  display: "flex",
                  // flexWrap: "wrap",
                  padding: "2rem 0 0 14rem",
                  position: "relative",
                  margin: "2rem 0"
                }}
              >
                <Box component="div" id="desc" sx={{}}>
                  <Stack spacing={2}>
                    <Typography
                      component="p"
                      variant="h6"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "2",
                        fontWeight: "500",
                      }}
                    >
                      {item.products.name}
                    </Typography>
                    <Typography component="p" sx={{fontSize: "1rem"}} >
                      Product Id: {item.products._id}
                    </Typography>
                    <Box
                      component="div"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginRight: "3rem",
                        }}
                      >
                        <Typography component="p" sx={{marginRight: "2rem", fontSize: "1.1rem"}} >₹{(item.products.price).toFixed(2)}</Typography>
                        <Typography
                          component="p"
                          sx={{ textDecoration: "line-through", fontSize: "1.1rem" }}
                        >
                          ₹{(item.products.price*1.15).toFixed(2)}
                        </Typography>
                      </Box>
                      <Box component="div">
                        <StyledRating
                          value={item.products.ratings}
                          readOnly
                          precision={0.1}
                          size="small"
                        />
                      </Box>
                    </Box>

                    <Box
                      component="div"
                      sx={{
                        "& .addtoCart:hover": {
                          border: "1px solid #12daa8",
                          backgroundColor: "#12daa8",
                        },
                      }}
                    >
                      <Button
                        className="addtoCart"
                        disableRipple
                        sx={{
                          color: "black",
                          backgroundColor: "#12daa8",
                          textAlign: "center",
                          borderRadius: "8px",
                          border: "1px solid #12daa8",
                          textTransform: "capitalize",
                          fontSize: "12px",
                          padding: "10px 40px",
                          fontWeight: "700",
                          minWidth: "200px",
                          marginRight: 2,
                        }}
                      >
                        Add to Cart
                      </Button>
                      <Button
                        sx={{
                          color: "#ffffff",
                          textAlign: "center",
                          borderRadius: "8px",
                          border: "1px solid #ffffff",
                          textTransform: "capitalize",
                          fontSize: "12px",
                          padding: "10px 40px",
                          fontWeight: "700",
                          minWidth: "200px",
                          marginRight: 2,
                        }}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Stack>
                </Box>

                <Box
                  component="div"
                  sx={{ position: "absolute", top: "2rem", left: "2rem" }}
                >
                  <CardMedia
                    component="img"
                    src={item.products.displayImage}
                    alt="image"
                    height="120"
                    width="120"
                    loading="lazy"
                    sx={{
                      objectFit: "contain",
                      borderRadius: "8px",
                      aspectRatio: "4/3"
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg";
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </>
      </Container>
    </Box>
  );
}

export default Wishlists;

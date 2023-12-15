import {
  AppBar,
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CromaContext from "../../ContextAPI/CromaContext";
import { addToCart } from "../../helper/addToCart";
import { toast } from "react-toastify";

function ProductFooter({ productDetails }) {
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  const { handleItemsInCart, handleOpenAuthDialog } = useContext(CromaContext);

  const userToken = JSON.parse(localStorage.getItem("userToken"));

  async function handleAddToCart(e) {
    // console.log(userToken);
    // console.log(productDetails._id);
    if (!userToken) {
      handleOpenAuthDialog();
    } else {
      const data = await addToCart(productDetails._id, userToken);
      // const res = addToCart(productDetails._id, userToken);
      console.log(data);
      handleItemsInCart(data.data.items.length);
      toast.success(data.message);
      // alert(data.message);
    }
  }

  async function handleBuyNow(e) {
    // console.log("token", userToken);
    if (!userToken) {
      handleOpenAuthDialog();
    } else {
      const res = await addToCart(productDetails._id, userToken);
      // const res = addToCart(productDetails._id, userToken);
      console.log(res);
      handleItemsInCart(res.data.items.length);
      navigate("/cart");
      toast.success(res.message);
      // alert(res.message);
    }
  }

  // console.log("token", userToken);

  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "#191919",
        boxShadow: "0 -7px 20px -10px #333",
        color: "inherit",
        height: "70px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={6} sm={12}>
            <Box
              component="div"
              sx={{
                padding: "15px 0",
                display: "flex",
                alignItems: "center",
                height: "70px",
              }}
            >
              <CardMedia
                component="img"
                src={productDetails?.displayImage}
                sx={{
                  height: "30px",
                  width: "30px",
                }}
              />
              <Typography
                variant="body2"
                component="span"
                sx={{
                  marginLeft: "1rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "2",
                  fontWeight: "500",
                }}
              >
                {productDetails?.name}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} sm={12}>
            <Box
              component="div"
              sx={{
                padding: "15px 0",
                display: "flex",
                alignItems: "center",
                height: "70px",
                width: "20rem",
                margin: "auto",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "9rem",
                  textTransform: "capitalize",
                  backgroundColor: "#12daa8",
                  textAlign: "center",
                  borderRadius: "8px",
                  border: "1px solid #12daa8",
                  fontWeight: "700",
                  color: "#121212",
                  marginRight: "1rem",
                  "&.MuiButtonBase-root:hover": {
                    backgroundColor: "#12daa8",
                  },
                }}
                disableRipple
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: "9rem",
                  textTransform: "capitalize",
                  backgroundColor: "#353535",
                  textAlign: "center",
                  borderRadius: "8px",
                  border: "1px solid #fff",
                  fontWeight: "900",
                  "&.MuiButtonBase-root:hover": {
                    backgroundColor: "#353535",
                  },
                }}
                disableRipple
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}

export default ProductFooter;

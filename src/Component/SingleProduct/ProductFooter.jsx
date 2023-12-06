import {
  AppBar,
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function ProductFooter({ productDetails }) {
    const navigate = useNavigate();
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
                  //   aspectRatio: "1/1",
                  //   objectFit: "contain",
                  height: "30px",
                  width: "30px",
                }}
              />
              <Typography
                variant="body2"
                component="span"
                sx={{ marginLeft: "1rem" }}
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
                margin: "auto"
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
                    backgroundColor: "#12daa8"
                  }
                }}
                disableRipple
                onClick={()=>navigate('/cart')}
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
                    backgroundColor: "#353535"
                  }
                }}
                disableRipple
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

import styled from "@emotion/styled";
import {
  Box,
  Button,
  CardMedia,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00e9bf",
  },
});

function CartProducts() {
  return (
    <Box
      component="div"
      sx={{
        padding: "1rem 0 1rem 12rem",
        position: "relative",
        marginRight: 1,
        borderRadius: "0.8rem",
        backgroundColor: "#ffffff",
      }}
    >
        {/* left box || right box */}
      <Box component="div" sx={{ display: "flex", marginLeft: "1.5rem" }}>
        <Box component='div' id="cartDetails-left" sx={{ paddingRight: "1.5rem" }}>
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
            Apple AirPods Pro (2nd Generation) with MagSafe Charging Case
          </Typography>

          <Box component="div" marginTop={1}>
            <StyledRating
              defaultValue="4"
              readOnly
              precision={0.5}
              size="small"
            />
          </Box>

          <Box component="div" sx={{ display: "flex", marginTop: 1 }}>
            <Typography
              component="p"
              variant="body2"
              sx={{ width: "150px", padding: "0 1rem 1rem 0", borderRadius: 1 }}
            >
              standard delivery by tomorrow
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "#979797" }}
            />
            <Typography
              component="p"
              variant="body2"
              sx={{ width: "150px", padding: "0 0 1rem 1rem", borderRadius: 1 }}
            >
              express delivery by today
            </Typography>
          </Box>

          <Box
            component="div"
            marginTop={1}
            sx={{
              "& .MuiButtonBase-root:hover ": {
                border: "1px solid #12daa8",
              },
            }}
          >
            <Button
              disableRipple
              sx={{
                color: "#103749",
                textAlign: "center",
                borderRadius: "8px",
                border: "1px solid black",

                textTransform: "capitalize",
                marginRight: 1.2,
                fontSize: "12px",
                padding: "10px 40px",
                fontWeight: "700",
              }}
            >
              Move to Wishlist
            </Button>
            <Button
              sx={{
                color: "#103749",
                textAlign: "center",
                borderRadius: "8px",
                border: "1px solid black",
                textTransform: "capitalize",
                marginLeft: 1.2,
                fontSize: "12px",
                padding: "10px 40px",
                fontWeight: "700",
              }}
            >
              Remove
            </Button>
          </Box>
        </Box>

        <Box component='div' id="cartDetails-right" sx={{paddingRight: "1.5rem"}}>
          <Box>
            <Typography component="span" sx={{ fontSize: "24px" }}>
              ₹
            </Typography>
            <Typography
              component="span"
              sx={{ fontSize: "24px", fontWeight: "700" }}
            >
              24,499.00
            </Typography>
          </Box>

          <Typography
            component="p"
            variant="body2"
            textAlign="end"
            sx={{ padding: "1rem 0" }}
          >
            (Incl. all Taxes)
          </Typography>

          <Divider />

          <Box component="div" sx={{ textAlign: "end" }}>
            <Typography
              component="span"
              fontWeight="500"
              fontSize="14px"
              sx={{ textDecoration: "line-through" }}
            >
              MRP{" "}
            </Typography>
            <Typography
              component="span"
              fontWeight="500"
              fontSize="14px"
              sx={{ textDecoration: "line-through" }}
            >
              ₹26,900
            </Typography>
            <Typography
              component="p"
              fontWeight="500"
              fontSize="12px"
              color="grey"
              textAlign="end"
            >
              (Save ₹2401.00)
            </Typography>
          </Box>
          <Divider />
        </Box>
      </Box>

      {/* image */}
      <Box
        component="div"
        sx={{ position: "absolute", top: "1rem", left: "3.6%" }}
      >
        <CardMedia
          component="img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
          alt="image"
          height="100"
          width="100"
          loading="lazy"
          sx={{
            objectFit: "contain",
            borderRadius: "8px",
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg";
          }}
        />
      </Box>
    </Box>
  );
}

export default CartProducts;

import { Badge, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function NavbarCart() {
    const navigate = useNavigate();
  return (
    <Box
      style={{
        marginRight: "20px",
        cursor: "pointer",
        position: "relative",
      }}
      onClick={() => navigate("cart")}
    >
      <Badge badgeContent={0} showZero overlap="circular">
        <ShoppingCartIcon />
      </Badge>
    </Box>
  );
}

export default NavbarCart;

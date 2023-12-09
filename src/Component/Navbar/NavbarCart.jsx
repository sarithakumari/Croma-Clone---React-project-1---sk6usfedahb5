import { Badge, Box } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CromaContext from "../../ContextAPI/CromaContext";
import styled from "@emotion/styled";

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    // border: "1px solid white",
    backgroundColor: "#12daa8",
    color: "black",
    minWidth: "5px",
  }
})

function NavbarCart() {
    const navigate = useNavigate();
    const { itemsInCart } = useContext(CromaContext);
    console.log(itemsInCart);
  return (
    <Box
      style={{
        marginRight: "20px",
        cursor: "pointer",
        position: "relative",
      }}
      onClick={() => navigate("cart")}
    >
      <StyledBadge badgeContent={itemsInCart?itemsInCart:0} showZero overlap="circular" sx={{}} >
        <ShoppingCartIcon />
      </StyledBadge>
    </Box>
  );
}

export default NavbarCart;

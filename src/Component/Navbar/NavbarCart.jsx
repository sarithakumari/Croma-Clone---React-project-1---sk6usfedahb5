import { Badge, Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
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
    const { itemsInCart, handleOpenAuthDialog, userToken } = useContext(CromaContext);
    // console.log(itemsInCart);
    

    useEffect(()=>{
      if(!userToken) {
        navigate('/');
        // handleOpenAuthDialog();
        // toastify - you need to login/signup first
      }
    }, [])

    function handleCartClick() {
      if(!userToken) {
        handleOpenAuthDialog();
      } else {
        navigate("cart");
      }
    }
  return (
    <Box
      style={{
        // marginRight: "20px",
        cursor: "pointer",
        position: "relative",
      }}
      onClick={handleCartClick}
    >
      <StyledBadge badgeContent={itemsInCart?itemsInCart:0} showZero overlap="circular" sx={{}} >
        <ShoppingCartIcon />
      </StyledBadge>
    </Box>
  );
}

export default NavbarCart;

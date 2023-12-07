import React, { useEffect } from "react";
import LoginForm from "../Login/LoginForm";
import SignUpForm from "../SignUp/SignUpForm";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const userToken = localStorage.getItem('userToken');
  console.log("token",userToken);

  useEffect(()=>{
    if(!userToken) 
    return navigate('/')
  }, [])

  if(!userToken) 
    return navigate('/')
  
  return (
    <Stack spacing={3}>
      <h1 style={{ marginTop: "60px" }}>Cart</h1>
      {/* <LoginForm />
      <SignUpForm /> */}
    </Stack>
  );
}

export default Cart;

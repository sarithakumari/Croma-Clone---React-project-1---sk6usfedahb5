import React from "react";
import LoginForm from "../Login/LoginForm";
import SignUpForm from "../SignUp/SignUpForm";
import { Stack } from "@mui/material";

function Cart() {
  return (
    <Stack spacing={3}>
      <h1 style={{ marginTop: "60px" }}>Cart</h1>
      <LoginForm />
      <SignUpForm />
    </Stack>
  );
}

export default Cart;

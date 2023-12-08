import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { signUpApi } from "../../helper/signUpApi";
import { useNavigate } from "react-router-dom";
import CromaContext from "../../ContextAPI/CromaContext";

function LoginForm({ handleClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {handleCloseAuthDialog} = useContext(CromaContext);

  // console.log({ name, email, password });
  // useEffect(()=>{
  //   signUpApi()
  // },[])
  async function handleSignUpSubmit(e) {
    e.preventDefault();
    const data = await signUpApi(name, email, password);
    // console.log('response', res);
    if(data.status === 'success')
    {
      const token = data.token;
      // console.log(token);
      localStorage.setItem('userToken', JSON.stringify(token))
      handleCloseAuthDialog();
      navigate("/");
    }
  }

  return (
    <Box flexGrow={1}>
      <Card
        component="form"
        // onSubmit={handleSignUpSubmit}
        sx={{
          width: "460px",
          padding: "1rem 2rem",
          margin: "auto",
          backgroundColor: "black",
          color: "white",
          borderRadius: 1,
        }}
      >
        <Stack
          spacing={2}
          sx={{
            marginTop: 2,
            "& .MuiInputBase-root": {
              color: "white",
            },
            "&:hover .MuiButtonBase-root": {
              backgroundColor: "#00b594",
            },
          }}
        >
          <Typography variant="body1" component="p" textAlign="center">
            Please enter Full Name, Email ID and Password
          </Typography>
          <TextField
            type="text"
            placeholder="Enter Your Full Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            sx={{ border: "1px solid white", borderRadius: 1, marginTop: 2 }}
          />
          <TextField
            type="email"
            placeholder="Enter Email Address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            sx={{ border: "1px solid white", borderRadius: 1, marginTop: 2 }}
          />
          <TextField
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ border: "1px solid white", borderRadius: 1, marginTop: 2 }}
          />
          <Typography
            variant="body2"
            component="p"
            textAlign="center"
            fontSize="10px"
          >
            By continuing you agree to our{" "}
            <Typography
              variant="body2"
              component="a"
              href="#"
              fontSize="10px"
              sx={{ color: "#12daa8" }}
            >
              Terms of Use{" "}
            </Typography>
            &{" "}
            <Typography
              variant="body2"
              component="a"
              href="#"
              fontSize="10px"
              sx={{ color: "#12daa8" }}
            >
              Privacy Policy
            </Typography>
          </Typography>
          <Button
            variant="contained"
            // onClick={() => console.log({ name, email, password })}
            onClick={handleSignUpSubmit}
            sx={{ backgroundColor: "#12daa8", color: "black" }}
          >
            Sign Up
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}

export default LoginForm;

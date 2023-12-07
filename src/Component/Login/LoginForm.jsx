import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Card,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { loginApi } from "../../helper/loginApi";
import CromaContext from "../../ContextAPI/CromaContext";

function LoginForm({ handleClose }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const {handleCloseAuthDialog} = useContext(CromaContext);

  // console.log({ username, password });
  async function handleLogin() {
    const res = await loginApi(username, password);
    // console.log('loginform data: ', res);
    if(res.status === 'success') {
        const token = res.token;
        // console.log(token);
        localStorage.setItem('userToken', JSON.stringify(token));
        handleCloseAuthDialog()
    }
  }

  return (
    <Box flexGrow={1} sx={{backgroundColor: "black",}} >
      <Card
        component="div"
        sx={{
          width: "460px",
          padding: "1rem 2rem",
          margin: "auto",
          backgroundColor: "black",
          color: "white",
          borderRadius: 1,
          position: "relative",
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
            Please enter your Email ID and Password
          </Typography>
          <TextField
            type="email"
            placeholder="Enter Email Address"
            value={username}
            required
            onChange={(e) => setUserName(e.target.value)}
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
            onClick={handleLogin}
            sx={{ backgroundColor: "#12daa8", color: "black" }}
          >
            Login
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}

export default LoginForm;

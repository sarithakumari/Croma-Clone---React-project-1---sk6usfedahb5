import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import {
  Box,
  Button,
  Card,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function SignUpForm() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // console.log({ username, password });

  return (
    <Box flexGrow={1}>
      <Card component="div" sx={{ width: "400px", padding: 4, margin: "auto" }}>
        <Stack spacing={2}>
          <Typography variant="body1" component="p" textAlign="center">
            Please enter your Name, Email ID and Password
          </Typography>
          <TextField
            type="text"
            placeholder="Enter Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="email"
            placeholder="Enter Email Address"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography variant="body2" component="p" textAlign="center">
            By continuing you agree to our
            <Typography
              variant="body2"
              component="a"
              href="#"
              // sx={{ textDecoration: "none" }}
            >
              {" "}
              Terms of Use{" "}
            </Typography>
            &{" "}
            <Typography
              variant="body2"
              component="a"
              href="#"
              // sx={{ textDecoration: "none" }}
            >
              Privacy Policy
            </Typography>
          </Typography>
          <Button variant="contained" onClick={()=>console.log({name, username, password})} >Sign Up</Button>
        </Stack>
      </Card>
    </Box>
  );
}

export default SignUpForm;
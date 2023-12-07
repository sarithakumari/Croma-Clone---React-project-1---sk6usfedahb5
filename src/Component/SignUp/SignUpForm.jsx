import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function LoginForm({ handleClose }) {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // console.log({ name, username, password });

  return (
    <Box flexGrow={1}>
      <Card
        component="div"
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
            Please enter your Email ID and Password
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
            onClick={() => console.log({ username, password })}
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

import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import {
  Box,
  Button,
  Card,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function LoginForm({ handleClose }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // console.log({ username, password });

  return (
    <Box flexGrow={1}>
      <Card
        component="div"
        sx={{
          width: "460px",
          padding: "3rem 2rem",
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
            onClick={() => console.log({ username, password })}
            sx={{ backgroundColor: "#12daa8", color: "black" }}
          >
            Login
          </Button>
        </Stack>
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: "0",
            right: "0",
            margin: 2,
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </Box>
      </Card>
    </Box>
  );
}

export default LoginForm;

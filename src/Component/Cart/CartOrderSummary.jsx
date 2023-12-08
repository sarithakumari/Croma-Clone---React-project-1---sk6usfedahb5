import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

function CartOrderSummary() {
  return (
    <Box
      width="100%"
      sx={{
        padding: "1.5rem",
        borderRadius: "0.8rem",
        backgroundColor: "#ffffff",
      }}
    >
      <Typography
        variant="body1"
        component="p"
        fontWeight="700"
        fontSize="18px"
        marginBottom={2}
      >
        Order Summary (x items){" "}
      </Typography>
      <Stack spacing={3}>
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography component="p" variant="body1">
            Original Price
          </Typography>
          <Typography component="p" variant="body1">
            49999
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography component="p" variant="body1">
            Original Price
          </Typography>
          <Typography component="p" variant="body1">
            49999
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography component="p" variant="body1">
            Original Price
          </Typography>
          <Typography component="p" variant="body1">
            49999
          </Typography>
        </Box>
      </Stack>
      <Button
        fullWidth
        sx={{
          marginTop: 4,
          background: "#12daa8",
          color: "#103749",
          textAlign: "center",
          borderRadius: "8px",
          border: "1px solid #12daa8",
          textTransform: "capitalize",
          //   padding: "0.9rem 1.5rem",
          fontWeight: "700",
          //   fontSize: "1.2rem"
        }}
      >
        Checkout
      </Button>
    </Box>
  );
}

export default CartOrderSummary;

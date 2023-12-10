import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function PaymentUPI() {
  return (
    <Box component="div" sx={{ padding: "1rem 0" }}>
      <Typography component="p" variant="h6" fontWeight="700">
        Enter UPI Details:
      </Typography>
      <Box component="div" sx={{ width: "400px" }}>
        <Typography variant="body1" component="p" sx={{ margin: "1rem 0" }}>
          UPI Address
        </Typography>
        <TextField
          fullWidth
          label="UPI Address"
          variant="filled"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CurrencyRupeeIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
}

export default PaymentUPI;

import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";

function PaymentCard() {
  return (
    <Box component="div" sx={{ padding: "1rem 0" }}>
      <Typography component="p" variant="h6" fontWeight="700">
        Enter Debit/Credit Card Details:
      </Typography>
      <Box component="div" sx={{ width: "400px" }}>
        <Typography
          variant="body1"
          component="p"
          sx={{ margin: "1rem 0" }}
        >
          Card Number
        </Typography>
        <TextField
          // fullWidth
          label="Card Number"
          variant="filled"
          sx={{minWidth: "300px"}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CreditCardIcon />
              </InputAdornment>
            ),
          }}
        />
        <Toolbar style={{ padding: "0px", marginTop: "1rem"}}>
          <Box component='div' width="150px" marginRight="1rem" >
            <Typography component='p'>Expiry</Typography>
            <TextField variant="filled" label="MM/YY" />
          </Box>
          <Box component='div' width="150px" marginRight="1rem" >
            <Typography>CVV</Typography>
            <TextField variant="filled" label="CVV" />
          </Box>
        </Toolbar>
        <Box component='div' marginTop="1rem" sx={{"& .MuiButtonBase-root:hover": {backgroundColor: "#12daa8"}}}>
            <Button sx={{color: "black", backgroundColor: "#12daa8", padding: "10px 20px", fontSize: "12px"}} >Place Order & Pay</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default PaymentCard;

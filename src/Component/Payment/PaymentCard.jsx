import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";

function PaymentCard({ cardDetails, handleCardDetails, error }) {
  // const [cardDetails, setCardDetails] = useState({
  //   cardNumber: "",
  //   expiry: "",
  //   cvv: "",
  // });

  // const [error, setError] = useState({
  //   cardNumber: !Boolean(cardDetails.cardNumber),
  //   expiry: !Boolean(cardDetails.expiry),
  //   cvv: !Boolean(cardDetails.cvv),
  // });

  const lengthError = !Boolean(
    cardDetails.cardNumber.length === 16 &&
      cardDetails.expiry.length === 5 &&
      cardDetails.cvv.length === 3
  );

  // function handleCardDetails(e) {
  //   const { name, value } = e.target;
  //   setCardDetails((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  //   setError((prev) => ({
  //     ...prev,
  //     [name]: !Boolean(value),
  //   }));
  // }

  // console.log(cardDetails);
  // console.log(error);
  // console.log(lengthError);

  return (
    <Box component="div" sx={{ padding: "1rem 0" }}>
      <Typography component="p" variant="h6" fontWeight="700">
        Enter Debit/Credit Card Details:
      </Typography>
      <Box component="div" sx={{ width: "100%" }}>
        <Typography variant="body1" component="p" sx={{ margin: "1rem 0" }}>
          Card Number
        </Typography>
        <TextField
          fullWidth
          label="Card Number"
          variant="filled"
          inputProps={{ maxLength: 16 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CreditCardIcon />
              </InputAdornment>
            ),
          }}
          error={error.cardNumber}
          helperText={
            error.cardNumber && error.cardNumber.length !== 16
              ? "Enter 16 digit Card Number "
              : ""
          }
          name="cardNumber"
          value={cardDetails.cardNumber}
          onChange={handleCardDetails}
        />

        <Toolbar style={{ padding: "0px", marginTop: "1rem", flexWrap: "wrap" }}>
          <Box component="div" width="150px" marginRight="1rem">
            <Typography component="p">Expiry</Typography>
            <TextField
              variant="filled"
              label="MM/YY"
              inputProps={{ maxLength: 5 }}
              error={error.expiry}
              helperText={
                error.expiry && error.expiry.length !== 5
                  ? "Enter Correct Expiry date"
                  : ""
              }
              name="expiry"
              value={cardDetails.expiry}
              onChange={handleCardDetails}
            />
          </Box>
          <Box component="div" width="150px" marginRight="1rem">
            <Typography>CVV</Typography>
            <TextField
              variant="filled"
              label="CVV"
              inputProps={{ maxLength: 3 }}
              error={error.cvv}
              helperText={
                error.cvv && error.cvv.length !== 3
                  ? "Enter Correct 3 digit CVV"
                  : ""
              }
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleCardDetails}
            />
          </Box>
        </Toolbar>

        {/* <Box
          component="div"
          marginTop="1rem"
          sx={{ "& .MuiButtonBase-root:hover": { backgroundColor: "#12daa8" } }}
        >
          <Button
            sx={{
              color: "black",
              backgroundColor: "#12daa8",
              padding: "10px 20px",
              fontSize: "12px",
            }}
          >
            Place Order & Pay
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
}

export default PaymentCard;

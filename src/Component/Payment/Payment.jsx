import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Collapse,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tab,
  Typography,
} from "@mui/material";

import React, { useContext, useEffect, useState } from "react";
import PaymentCard from "./PaymentCard";
import PaymentUPI from "./PaymentUPI";
import CartOrderSummary from "../Cart/CartOrderSummary";
import PaymentOrderSummary from "./PaymentOrderSummary";
import CromaContext from "../../ContextAPI/CromaContext";

function Payment() {
  const [tabValue, setTabValue] = useState("1");

  const [upi, setUpi] = useState("");
  const [upiError, setUpiError] = useState(!Boolean(upi));

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [error, setError] = useState({
    cardNumber: !Boolean(cardDetails.cardNumber),
    expiry: !Boolean(cardDetails.expiry),
    cvv: !Boolean(cardDetails.cvv),
  });

  // const [payBtn, setPayBtn] = useState(false);

  const { cartProducts, handleOpenAuthDialog, userToken } =
    useContext(CromaContext);

  useEffect(() => {
    if (!userToken) {
      navigate("/");
      handleOpenAuthDialog();
    }
  }, [userToken]);

  function handleCardDetails(e) {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError((prev) => ({
      ...prev,
      [name]: !Boolean(value),
    }));
  }

  function handleUpi(e) {
    setUpi(e.target.value);
    setUpiError(!Boolean(e.target.value));
  }

  function handleTabChange(e, value) {
    setTabValue(value);
  }

  const payBtn = !upiError || (!error.cardNumber && !error.expiry && !error.cvv) ;

  // console.log("Payments cartProducts:", cartProducts);
  // console.log(upiError);

  return (
    <Box
      flexGrow={1}
      component="div"
      sx={{
        backgroundColor: "#f9f9f9!important",
        color: "black",
        width: "100%",
        // height: "100vh",
        paddingTop: "6rem",
        paddingBottom: "3rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Box
              component="div"
              sx={{
                margin: "1rem 1rem 1rem 0",
                width: "100%",
                border: "1px solid #12daa8",
                borderRadius: "8px",
                backgroundColor: "white",
                color: "inherit",
              }}
            >
              <TabContext value={tabValue}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    "& .MuiTabs-indicator": {
                      backgroundColor: "#12daa8",
                    },
                  }}
                >
                  <TabList onChange={handleTabChange} textColor="inherit">
                    <Tab label="Credit/Debit Card" value="1" />
                    <Tab label="UPI" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Box component="div" id="card" sx={{ width: "100%" }}>
                    <PaymentCard
                      cardDetails={cardDetails}
                      handleCardDetails={handleCardDetails}
                      error={error}
                    />
                  </Box>
                </TabPanel>
                <TabPanel value="2">
                  <Box component="div" id="upi" sx={{ width: "100%" }}>
                    <PaymentUPI
                      // handleUpiError={handleUpiError}
                      upiError={upiError}
                      upi={upi}
                      handleUpi={handleUpi}
                    />
                  </Box>
                </TabPanel>
              </TabContext>
            </Box>
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box component="div" sx={{ margin: "1rem 0 0 0" }}>
              <PaymentOrderSummary payBtn={payBtn} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Payment;

/* 
<Box
              component="div"
              sx={{ margin: "1rem 1rem 1rem 0", width: "100%" }}
            >
              <Accordion defaultExpanded sx={{ border: "1px solid #12daa8" }}>
                <AccordionSummary
                  sx={{ borderBottom: "1px solid lightgrey" }}
                  expandIcon={<ExpandMoreIcon sx={{ color: "#12daa8" }} />}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "500" }}
                  >
                    Payment Details:
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container>
                    <Grid item lg={4} md={4} sm={4} xs={3}>
                      <List>
                        <ListItem>
                          <ListItemButton onClick={handleCardClick}>
                            <ListItemText primary="Card" />
                          </ListItemButton>
                        </ListItem>

                        <ListItem>
                          <ListItemButton onClick={handleUPIClick}>
                            <ListItemText primary="UPI" />
                          </ListItemButton>
                        </ListItem>

                        {/* <ListItem>
                          <ListItemButton onClick={handleBankingClick}>
                            <ListItemText primary="Net Banking" />
                          </ListItemButton>
                        </ListItem> */
// </List>
// </Grid>

// <Grid item lg={8} md={8} sm={8} xs={9}>
//   <Collapse in={openCard}>
//     <Box component="div" id="card">
//       <PaymentCard />
//     </Box>
//   </Collapse>

//   <Collapse in={openUPI}>
//     <Box component="div" id="upi">
//       <PaymentUPI />
//     </Box>
//   </Collapse>

{
  /* <Collapse in={openBanking}>
                            <Box component="div" id="netbanking">
                              <Typography variant="body2">net banking</Typography>
                            </Box>
                          </Collapse> */
}
{
  /* </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Box> */
}

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
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PaymentCard from "./PaymentCard";
import PaymentUPI from "./PaymentUPI";
import CartOrderSummary from "../Cart/CartOrderSummary";
import PaymentOrderSummary from "./PaymentOrderSummary";
import CromaContext from "../../ContextAPI/CromaContext";

function Payment() {
  const [openCard, setCard] = useState(true);
  const [openUPI, setOpenUPI] = useState(false);
  // const [openBanking, setBanking] = useState(false);
  
  const {cartProducts, handleOpenAuthDialog} = useContext(CromaContext);

  const userToken = JSON.parse(localStorage.getItem('userToken'));

  useEffect(()=>{
    if(!userToken) {
      navigate('/');
      handleOpenAuthDialog();
    }
  }, [])

  function handleUPIClick() {
    setCard(false);
    setOpenUPI(!openUPI);
    // setBanking(false);
  }
  function handleCardClick() {
    setCard(!openCard);
    setOpenUPI(false);
    // setBanking(false);
  }
  
  // function handleBankingClick() {
  //   setBanking(!openBanking);
  //   setCard(false);
  //   setOpenUPI(false);
  // }

  console.log('Payments cartProducts:', cartProducts);

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
          <Grid item lg={8} md={8}>
            <Box component="div" sx={{margin: "1rem 1rem 1rem 0"}} >
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
                            <ListItemText primary="Credit/Debit Card" />
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
                        </ListItem> */}

                      </List>
                    </Grid>

                    <Grid item lg={8} md={8} sm={8} xs={9}>
                      <Collapse in={openCard}>
                        <Box component="div" id="card">
                          <PaymentCard />
                        </Box>
                      </Collapse>

                      <Collapse in={openUPI}>
                        <Box component="div" id="upi">
                          <PaymentUPI />
                        </Box>
                      </Collapse>

                      {/* <Collapse in={openBanking}>
                        <Box component="div" id="netbanking">
                          <Typography variant="body2">net banking</Typography>
                        </Box>
                      </Collapse> */}

                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
          <Grid item lg={4} md={4}>
            <Box component='div' sx={{margin: "1rem 0 0 0"}} >
              <PaymentOrderSummary />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Payment;

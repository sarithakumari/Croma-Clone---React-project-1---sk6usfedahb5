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
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Payment() {
  const [openCard, setCard] = useState(true);
  const [openUPI, setOpenUPI] = useState(false);
  const [openBanking, setBanking] = useState(false);

  function handleUPIClick() {
    setCard(false)
    setBanking(false)
    setOpenUPI(!openUPI);
  }
  function handleCardClick() {
    setCard(!openCard);
    setBanking(false);
    setOpenUPI(false);
  }
  function handleBankingClick() {
    setBanking(!openBanking);
    setCard(false);
    setOpenUPI(false);
  }

  return (
    <Box
      flexGrow={1}
      component="div"
      sx={{
        backgroundColor: "#f9f9f9!important",
        color: "black",
        width: "100vw",
        paddingTop: "6rem",
      }}
    >
      <Container maxWidth="lg">
        <Accordion defaultExpanded sx={{ border: "1px solid #12daa8" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#12daa8" }} />}
          >
            <Typography variant="h6" component="div" sx={{ fontWeight: "500" }}>
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

                  <ListItem>
                    <ListItemButton onClick={handleBankingClick}>
                      <ListItemText primary="Net Banking" />
                    </ListItemButton>
                  </ListItem>

                </List>

              </Grid>

              <Grid item lg={8} md={8} sm={8} xs={9}>

                <Collapse in={openCard}>
                  <Box component="div" id="card">
                    <Typography variant="body2">card</Typography>
                  </Box>
                </Collapse>

                <Collapse in={openUPI}>
                  <Box component="div" id="upi">
                    <Typography variant="body2">upi</Typography>
                  </Box>
                </Collapse>

                <Collapse in={openBanking}>
                  <Box component="div" id="netbanking">
                    <Typography variant="body2">net banking</Typography>
                  </Box>
                </Collapse>
                
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
}

export default Payment;

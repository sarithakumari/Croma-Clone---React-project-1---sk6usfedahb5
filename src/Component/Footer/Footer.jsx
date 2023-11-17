import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BottomNavigation from '@mui/material/BottomNavigation';
import FooterSocials from "./FooterSocials";
import FooterLinks from "./FooterLinks";
import FooterProducts from "./FooterProducts";


function Footer() {
  return (
    <Box component='div' style={{ backgroundColor: "black", height: "50vh" }}>
      <Container maxWidth="lg">
        <Box>
          <Grid container columnSpacing={3}>

            <Grid item>
              <Paper style={{ backgroundColor: "inherit", color: "white" }} elevation={0}>
                <FooterSocials />
              </Paper>
            </Grid>

            <Grid item>
              <Paper style={{ backgroundColor: "inherit", color: "white" }} elevation={0}>
                <FooterLinks />
              </Paper>
            </Grid>

            <Grid item>
              <Paper style={{ backgroundColor: "inherit", color: "white" }} elevation={0}>
                <FooterProducts />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

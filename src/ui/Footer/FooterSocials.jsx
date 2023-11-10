import React from 'react'
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from "@mui/material/Box";


function FooterSocials() {
  return (
    <React.Fragment>
        <Typography variant='p'>CONNECT WITH US</Typography>
        <Toolbar style={{padding: "0", position: "relative"}} >
            <TextField id="outlined-basic" placeholder="Enter Email ID" variant="outlined" style={{backgroundColor: "white", color: "black"}} />
            <Box style={{postion: "absolute", top: "20px"}}>
                
                <ArrowForwardIcon />
            </Box>
        </Toolbar>
    </React.Fragment>
  )
}

export default FooterSocials
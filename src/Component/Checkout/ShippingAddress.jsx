import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function ShippingAddress({ addressType, street, locality, city, state, country, pincode }) {
  return (
    <Card sx={{margin: "2rem 0", maxWidth: "400px"}}>
        <CardContent>
            <Typography variant='h6' component='p' sx={{textDecoration: "underline", fontWeight: "700"}} >{addressType}</Typography>
            <Box component='div' >
               <Typography variant="h6" component='span' sx={{fontWeight: "500"}} >{street},&nbsp;</Typography>
                <Typography variant="h6" component='span' sx={{fontWeight: "500"}} >{locality},&nbsp;</Typography>
                <Typography variant="h6" component='span' sx={{fontWeight: "500"}} >{city}&nbsp;-&nbsp;</Typography>
                <Typography variant="h6" component='span' sx={{fontWeight: "500"}} >{pincode}.&nbsp;</Typography>
                <Typography variant="h6" component='span' sx={{fontWeight: "500"}} >{state}.&nbsp;</Typography>
                <Typography variant="h6" component='span' sx={{fontWeight: "500"}} >{country}.&nbsp;</Typography> 
            </Box>
            
        </CardContent>
    </Card>
  )
}

export default ShippingAddress
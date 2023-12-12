import { Box, Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import CromaContext from '../../ContextAPI/CromaContext'

function NavAuthAccount() {
    const { handleOpenAuthDialog } = useContext(CromaContext);
  return (
    <Box component="div">
      <Button sx={{ backgroundColor: "transparent", color: "inherit" }} onClick={handleOpenAuthDialog} >
        <Typography component="p" textTransform="capitalize">Sign Up/Login</Typography>
      </Button>
    </Box>
  )
}

export default NavAuthAccount
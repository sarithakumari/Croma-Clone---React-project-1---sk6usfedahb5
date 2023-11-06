import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Navbar() {
  return (
    <>
        <AppBar position='static'>
         <Toolbar>
             <Typography>React Navbar Example</Typography>
         </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
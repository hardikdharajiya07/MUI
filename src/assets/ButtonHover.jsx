import { Box, Button } from '@mui/material'
import React from 'react'

function ButtonHover() {
  return (
    <>
        
        <Button variant='contained' color='secondary'  sx={{
        "&:hover": {
        Transform:"tarnslateY(-3px) scale(1.03)",
         boxShadow:6,            
        }
      }}>Click </Button>
     
    </>
  )
}

export default ButtonHover

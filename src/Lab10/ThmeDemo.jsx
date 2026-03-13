import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function ThmeDemo() {
  return (
    <>
        <Box sx={{background:"pink", height:'200px', width:'300px', borderRadius:3, display:'flex',alignItems:'center',marginLeft:'500px'}}>
            <Typography variant='h3' color='white'>hello world</Typography>
            <Button color='secondary'>click</Button>
        </Box>
    </>
  )
}

export default ThmeDemo

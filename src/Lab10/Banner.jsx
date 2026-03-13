import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Banner() {
  return (
    <>
        <Box sx={{background:"white" ,borderRadius:3, boxShadow:3, height:'300px', width:'300px'}}>
            <img sx={{borderRadius:2,boxShadow:2}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDv_aknLyFkqHk-xZkkw9U4itmUifheIJUow&s'/>
         <Typography variant="contained">Limited Time Offer</Typography>
         <Typography variant="h3">50% off today</Typography>
         <Button variant="contained" color="secondary">click</Button>
        </Box>
    </>
  )
}

export default Banner

// "&:hover":{
//     Transform:"tarnslateY(-3px) scale(1.03)",
//     boxShadow:6,
// }

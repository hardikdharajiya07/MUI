import { Box, Typography } from '@mui/material'
import React from 'react'

function ResponsiveTypo() {
  return (
    <>
        <Box>
            <Typography variant='h1' sx={{ width: '100%', maxWidth: 500 }}>hello world</Typography>
        </Box>
    </>
  )
}

export default ResponsiveTypo

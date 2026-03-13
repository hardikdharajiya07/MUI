import { Box } from '@mui/material'
import React from 'react'

function FullPageLayout() {
  return (
    <>
        <Box sx={{ bgcolor: 'primary.main', color: 'white', textAlign: 'center', py: 2 }}>
          <h1>My Website</h1>
        </Box>
        <Box sx={{ flex: 1, py: 4, px:2 }}>
          <h2>Welcome</h2>
          <p>
            This is the main content area.  
            Add your page content here.
          </p>
        </Box>
        <Box sx={{ bgcolor: 'primary.main', color: 'white', textAlign: 'center', py: 2 }}>
          <p>© 2026 My Website | All Rights Reserved</p>
        </Box>
    </>
  )
}

export default FullPageLayout

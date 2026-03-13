import { Button, Tooltip } from '@mui/material'
import React from 'react'

function ButtonToolTip() {
  return (
   <Tooltip title="Add" arrow>
  <Button variant='contained'>Arrow</Button>
</Tooltip>
  )
}

export default ButtonToolTip

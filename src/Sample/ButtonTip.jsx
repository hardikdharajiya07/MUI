import React from "react";
import { Box, Button, Tooltip } from "@mui/material";

export default function ButtonTip() {
  return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
      <Tooltip title="Click to save data">
        <Button variant="contained" 
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "16px",
            textTransform: "none",
            borderRadius: "10px"}}>Save</Button>
      </Tooltip>
      </Box>
   
  );
}

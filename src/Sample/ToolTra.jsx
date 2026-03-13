import React from "react";
import { Tooltip, Button, Fade, Box } from "@mui/material";

export default function ToolTra() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
      <Tooltip
        title="This tooltip appears with smooth transition"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 500 }}
        arrow
      >
        <Button
          variant="contained"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: 16,
            borderRadius: "10px",
            textTransform: "none"
          }}
        >
          Hover Me
        </Button>
      </Tooltip>
    </Box>
  );
}

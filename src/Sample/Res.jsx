import React from "react";
import { Grid, Box, Typography } from "@mui/material";

export default function Res() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box sx={{ bgcolor: "primary.light", p: 3 }}>
            <Typography>Box 1</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box sx={{ bgcolor: "secondary.light", p: 3 }}>
            <Typography>Box 2</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box sx={{ bgcolor: "success.light", p: 3 }}>
            <Typography>Box 3</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box sx={{ bgcolor: "warning.light", p: 3 }}>
            <Typography>Box 4</Typography>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}

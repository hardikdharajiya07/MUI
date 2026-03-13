import React from "react";
import { Grid, Box, Typography } from "@mui/material";

export default function TwoCol() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              bgcolor: "primary.light",
              p: 3,
              height: "100%",
            }}
          >
            <Typography variant="h6">Left Column</Typography>
            <Typography>
              Sidebar / Menu content goes here.
            </Typography>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              bgcolor: "grey.100",
              p: 3,
              height: "100%",
            }}
          >
            <Typography variant="h6">Right Column</Typography>
            <Typography>
              Main content area goes here.
            </Typography>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}

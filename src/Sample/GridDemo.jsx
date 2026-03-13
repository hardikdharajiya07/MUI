import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Paper,
} from "@mui/material";

export default function GridDemo() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* ===== Header ===== */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Two Column Layout</Typography>
        </Toolbar>
      </AppBar>

      {/* ===== Content ===== */}
      <Box sx={{ flex: 1, p: 3, backgroundColor: "#f2f2f2" }}>
        <Grid container spacing={2}>

          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Typography variant="h6">Left Sidebar</Typography>
              <Typography>
                This is the left column. You can place menus, links, or filters here.
              </Typography>
            </Paper>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Typography variant="h6">Main Content</Typography>
              <Typography>
                This is the right column. It is wider and used for main content.
              </Typography>
            </Paper>
          </Grid>

        </Grid>
      </Box>

      {/* ===== Footer ===== */}
      <Box
        sx={{
          p: 2,
          backgroundColor: "#1976d2",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          © 2026 Two Column Layout
        </Typography>
      </Box>
    </Box>
  );
}

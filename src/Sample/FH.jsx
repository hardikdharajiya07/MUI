import React from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";

export default function Layout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      {/* ========== Header ========== */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Website</Typography>
        </Toolbar>
      </AppBar>

      {/* ========== Content Area ========== */}
      <Box sx={{ flex: 1, py: 4 }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Welcome
          </Typography>
          <Typography>
            This is the main content area.  
            Add your page content here.
          </Typography>
        </Container>
      </Box>

      {/* ========== Footer ========== */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          textAlign: "center",
          py: 2,
        }}
      >
        <Typography variant="body2">
          © 2026 My Website | All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
}

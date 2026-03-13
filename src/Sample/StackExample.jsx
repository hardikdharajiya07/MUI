import React from 'react';
import { Stack, Paper, Typography, Box } from '@mui/material';

export default function StackExample() {
  return (
    <Box sx={{ p: 3 }}>
      
      {/* ===== Vertical Stack ===== */}
      <Typography variant="h6" gutterBottom>
        Vertical Stack
      </Typography>

      <Stack spacing={2}>
        <Paper sx={{ p: 2 }}>Item 1</Paper>
        <Paper sx={{ p: 2 }}>Item 2</Paper>
        <Paper sx={{ p: 2 }}>Item 3</Paper>
      </Stack>

      <Box sx={{ my: 4 }} />

      {/* ===== Horizontal Stack ===== */}
      <Typography variant="h6" gutterBottom>
        Horizontal Stack
      </Typography>

      <Stack direction="row" spacing={2}>
        <Paper sx={{ p: 2 }}>Box A</Paper>
        <Paper sx={{ p: 2 }}>Box B</Paper>
        <Paper sx={{ p: 2 }}>Box C</Paper>
      </Stack>

    </Box>
  );
}

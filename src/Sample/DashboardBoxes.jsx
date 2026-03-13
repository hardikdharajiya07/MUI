import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

export default function DashboardBoxes() {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        
        {/* Stats Box */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Stats</Typography>
            <Typography>Total Users: 1200</Typography>
          </Paper>
        </Grid>

        {/* Chart Box */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Chart</Typography>
            <Typography>Sales chart will be here.</Typography>
          </Paper>
        </Grid>

        {/* Recent Orders Box */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Recent Orders</Typography>
            <Typography>Order #1234 - Completed</Typography>
            <Typography>Order #1235 - Pending</Typography>
          </Paper>
        </Grid>

        {/* Notifications Box */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Notifications</Typography>
            <Typography>New user registered.</Typography>
            <Typography>Server backup completed.</Typography>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Box
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function TopNavbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        {/* ===== Logo ===== */}
        <Typography variant="h6">
          MyDashboard
        </Typography>

        {/* ===== Search Bar ===== */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'rgba(255,255,255,0.15)',
            px: 2,
            borderRadius: 1,
            width: { xs: '120px', sm: '250px' }
          }}
        >
          <SearchIcon />
          <InputBase
            placeholder="Search…"
            sx={{ ml: 1, color: 'inherit', width: '100%' }}
          />
        </Box>

        {/* ===== Icon Buttons ===== */}
        <Box>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

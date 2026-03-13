import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  AppBar,
  Typography
} from "@mui/material";

const drawerWidth = 220;

export default function DrawerDemo() {
  return (
    <Box sx={{ display: "flex" }}>
      
      {/* ===== Header ===== */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6">Admin Panel</Typography>
        </Toolbar>
      </AppBar>

      {/* ===== Sidebar ===== */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          {["Dashboard", "Users", "Orders", "Settings"].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* ===== Content ===== */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}
      >
        <Toolbar />
        <Typography variant="h5">Welcome</Typography>
        <Typography>This is your main content area.</Typography>
      </Box>
    </Box>
  );
}

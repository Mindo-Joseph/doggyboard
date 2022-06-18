import React from 'react';
import {
  Box, AppBar, Toolbar, Typography, IconButton,
} from '@material-ui/core';

export default function Landingpage() {
  return (
    <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="space-between" p={1} m={1}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: '#fff', boxShadow: '0 0 30px lightgray' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" />
          <Typography variant="h6" component="div" style={{ color: '#5f67fe' }}>Dogs!</Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <AppBar position="static" sx={{marginBottom: '50px'}}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            TV Shows
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
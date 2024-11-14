import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <AppBar position="static" sx={{marginBottom: '50px'}}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1, textDecoration: "none"}}>
            <NavLink to={"/"}> TV Shows</NavLink>
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
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { Link } from 'react-router-dom';

const BarStyle = makeStyles({
  root: {
      background: '21D4FD',
      backgroundImage: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
  },
});


 function ButtonAppBar() {
   
  const classes = BarStyle();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Link to="/">
              <Typography variant="h5" component="div" sx={{ flexGrow: 1}} >
                  Picturesque <PhotoLibraryIcon />
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  export default ButtonAppBar;

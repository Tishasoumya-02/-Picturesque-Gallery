import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

const BarStyle = makeStyles({
  root: {
      background: 'FBDA61',
      backgroundImage: 'linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)',
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
            <Typography variant="h5" component="div" sx={{ flexGrow: 1}} >

                 Picturesque <PhotoLibraryIcon />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  export default ButtonAppBar;

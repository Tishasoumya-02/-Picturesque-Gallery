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
    background: '#EC6F66',                                             /* fallback for old browsers */
    // eslint-disable-next-line no-dupe-keys
    background: '-webkit-linear-gradient(to right, #F3A183, #EC6F66)', /* Chrome 10-25, Safari 5.1-6 */
    // eslint-disable-next-line no-dupe-keys
    background: 'linear-gradient(to right, #F3A183, #EC6F66)',         /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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

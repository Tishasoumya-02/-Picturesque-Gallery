import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

const textStyle=makeStyles({
    root:
    {
     color:'#132880'
    }
})
function NoSearch()
{
 const classes=textStyle();
    return(
<Grid  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ marginTop:'40px'}}
  >
  
<Typography align="center" variant="h4" className={classes.root} sx={{fontFamily:'Roboto Condensed'}}>Search results will appear here...<ImageSearchIcon/></Typography>
<img src="https://cdn.dribbble.com/users/77121/screenshots/11343397/media/6fbeecdf65373710e1c36c28e2c28649.jpg?compress=1" height="50%" width="30%" alt="searching" />
  </Grid>
    )
}
export default NoSearch;
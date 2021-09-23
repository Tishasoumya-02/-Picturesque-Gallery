import react from 'react';
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
<img src="https://images.squarespace-cdn.com/content/v1/55d6264ee4b074f43cec4558/1562691067475-I7ZGU6O96VW3V88IJGNA/searching.gif" alt="searching" style={{padding:'10px'}}/>
  </Grid>
    )
}
export default NoSearch;
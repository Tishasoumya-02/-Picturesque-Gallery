import { usePromiseTracker } from "react-promise-tracker";
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';


const inputSearch=makeStyles(
   {
     root:
     {
      marginTop:'100px'
     }
   });
   
const LoadingIndicator = ()=> {
   const classes = inputSearch();
    const { promiseInProgress } = usePromiseTracker();
       return (
         promiseInProgress &&
         <Grid  container className={classes.root}
         spacing={0}
         direction="column"
         alignItems="center"
         justify="center"
         >
         <CircularProgress color="primary" size={100} thickness={3.6}  />
         </Grid>
      );
     }

     export default LoadingIndicator;

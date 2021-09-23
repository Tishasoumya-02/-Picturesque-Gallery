import { usePromiseTracker } from "react-promise-tracker";
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
       return (
         promiseInProgress && 
         <Grid  container
         spacing={0}
         direction="column"
         alignItems="center"
         justify="center"
         style={{ marginTop:'60px'}}
         >
         <CircularProgress color="primary" size={100} thickness={3.6}  />
         </Grid>
      );  
     }

     export default LoadingIndicator;
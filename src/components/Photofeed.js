import React, { useState ,useEffect} from "react";
import axios from 'axios';
import Image from './Image';
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import BackToTop from "./ScrollTop";
import Button from '@mui/material/Button';
import { styled } from '@mui/styles';
import Grid from '@mui/material/Grid';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
function Photofeed(props)
{
    const [photos,setPhoto]=useState([]);
    

    useEffect(()=>
    {
        axios.get(" https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=6c10712930f033ab6e8c9ff1f4bc0592&per_page=500&format=json&nojsoncallback=1")
        .then(res=>{
            console.log(res.data);
            setPhoto(res.data.photos.photo);
        })
        .catch(err => console.log(err));
    },[])

    const MyButton = styled(Button)({
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      
      });

return(
    <div>
    <Container>

    <Grid  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ marginTop:'30px'}}
  >
    <Link to="/Search" id="back-to-top-anchor" style={{textDecoration:'none'}}>
               <MyButton  variant="contained">Search Images<ImageSearchIcon style={{paddingLeft:'5px'}}/></MyButton>
               </Link>
  </Grid> 
       
    <Image  data={photos} />
    </Container>
    <BackToTop {...props} />

   </div>
)
}
export default Photofeed;
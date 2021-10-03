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
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from './LoadingIndicator';

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: "3px",
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: "48px",
    padding: '0 30px',

});

function Photofeed(props)
{
    const [photos,setPhoto]=useState([]);
    const [load,setLoad] = useState(false);

//suspense which is in beta mode will be used here in the future ,it will enhance the performance and reduce overheads.
    useEffect(()=>
    {
        trackPromise(
            axios.get( `https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=54ca3e56ffa6a56093186e0fedc6c786&per_page=500&format=json&nojsoncallback=1`)
                .then(res=>{
                    console.log(res.data);
                    setPhoto(res.data.photos.photo);
                    setLoad(true);
                })
                .catch(err => console.log(err)))
    },[]);

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
                <LoadingIndicator/>

                <Image  data={photos} isLoaded={load}/>
            </Container>
            <BackToTop {...props} />

        </div>
    )
}

export default Photofeed;
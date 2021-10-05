/* eslint-disable jsx-a11y/heading-has-content */
import {useState,useEffect} from 'react';
import axios from 'axios';
import Image from './Image';
import BackToTop from './ScrollTop';
import Typography from '@mui/material/Typography';
import NoSearch from './NoSearch';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from './LoadingIndicator';


const inputSearch=makeStyles(
  {
    root:
    {
      padding:"13px ",
      border:"2px solid #ddd",
      marginBottom: "10px",
      borderRadius: "50px",
      outline: "none",
      boxShadow: "0 3px 7px 0 rgba(0,0,0,.2)"

    }
  })

function Search(props)
{

var pastSearches = [];
const [photo,setPhoto]=useState([]);
const [searchText,setSearchText]=useState('');
const [querypic,setQuery]=useState('');
const [load,setLoad] = useState(false);
const classes = inputSearch();

const onSearchChange=(e)=>
{
setSearchText(e.target.value);
}

     const handleSubmit=(e)=>
         {
          e.preventDefault();
          setQuery(searchText);
         console.log('You typed "'+ querypic + '" in the Search field');

         if(localStorage["pastSearches"]) {
            pastSearches = JSON.parse(localStorage["pastSearches"]);

       }
       if(pastSearches.indexOf(searchText) === -1) {
        pastSearches.unshift(searchText);
        if(pastSearches.length > 5) {
           pastSearches.pop();
        }
        localStorage["pastSearches"] = JSON.stringify(pastSearches);
   }
         e.currentTarget.reset();
           }

useEffect(()=>
{

    const url=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=54ca3e56ffa6a56093186e0fedc6c786&tags=${querypic}&format=json&nojsoncallback=1`
    trackPromise(
    axios.get(url)
        .then(res=>{
            console.log(res.data.photos.photo);
            setPhoto(res.data.photos.photo);
            setLoad(true);
        })
        .catch(err => console.log(err)))
},[querypic]);


    return(
        <div>

    <Grid  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ marginTop:'30px'}}
  >
        <form className="search-form" onSubmit={handleSubmit} id="back-to-top-anchor"  >
          <input type="search" className={classes.root}
            onChange={onSearchChange}
            id="search"
            name="search"
            size="50"
            placeholder="Search..."  />
        </form>
        </Grid>
        <Typography align="center" variant="h6" sx={{paddingTop:"10px",fontFamily:'Roboto Condensed'}} >Search history-</Typography>
        <Typography align="center" variant="h5"  sx={{ color:'red',fontFamily:'Roboto Condensed' ,textTransform: 'uppercase'}} dangerouslySetInnerHTML={{ __html: JSON.parse(localStorage.getItem('pastSearches')) }} />
        <Typography align="center" variant="h4" sx={{ color:'black',fontFamily:'Roboto Condensed' }}>{querypic ?<LoadingIndicator/>     :null }</Typography>
        <Typography align="center" variant="h4" sx={{ color:'black',fontFamily:'Roboto Condensed' }}>{querypic ?`Search results for "${querypic}"`  :<NoSearch /> }</Typography>

        <Image data={photo} isLoaded={load}/>
        <BackToTop {...props} />
        </div>
    );
}
export default Search;

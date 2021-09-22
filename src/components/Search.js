import react,{useState,useEffect} from 'react';
import axios from 'axios';
import Image from './Image';
import BackToTop from './ScrollTop';
import Typography from '@mui/material/Typography';
import NoSearch from './NoSearch';

function Search(props)
{
var pastSearches = []; 
const [photo,setPhoto]=useState([]);
const [searchText,setSearchText]=useState('');
const [querypic,setQuery]=useState('');

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
    const url=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=246e886b871da3f5b5f22f8256cccdbb&tags=${querypic}&format=json&nojsoncallback=1`
        axios.get(url)
        .then(res=>{
            console.log(res.data);
            setPhoto(res.data.photos.photo);
        })
        .catch(err => console.log(err));
},[querypic]);



    return(
        <div>
        <form className="search-form" onSubmit={handleSubmit} id="back-to-top-anchor" >
          <input type="search"
            onChange={onSearchChange}
            id="search"
            name="search"
            placeholder="Search"  />
          <button type="submit" className="search-button" id="searchButton">
            <svg fill="#fff" height="15" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </button>
        </form>
        <Typography align="center" variant="h4" sx={{ color:'#132880',fontFamily:'Roboto Condensed'}}>{querypic ?`Search results for '${querypic}' ` :<NoSearch /> }</Typography>
        {
            <Image data={photo}/> 
        }
<BackToTop {...props} />
        </div>
      
   
    );
}
export default Search;
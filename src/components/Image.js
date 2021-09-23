import React from 'react';


import Photo from './Photo';

function Image(props)
{
  const result=props.data;
  let images;
  images= result.map(photo =>
    <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} title={photo.title} />
  );
  console.log(images);
    return(
        <div> 
          <ul>
       {images}
    </ul>
        </div>
    );
  }
    

export default Image;

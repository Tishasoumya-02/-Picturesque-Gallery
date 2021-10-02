import React from 'react';
import Photo from './Photo';

function Image(props)
{
  const result=props.data;
  let images;
  images= result.map(photo =>
    <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} title={photo.title} />
  );

  //console.log(images);
  
    return(
        <div>
          <section>
       {images}
          </section>
        </div>
    );
  }

export default Image;

//Note: The Flickr API doesnot provide direct URL to render images,we have to construct it ourself.There could be
//some bumps while trying to improve the UI. If you have any better ideas for how the images could be rendered,they are welcome.

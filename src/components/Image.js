import React, {useEffect} from 'react';
import Photo from './Photo';
import Aos from "aos";
import "aos/dist/aos.css"

function Image(props)
{
    const result = props.data;
    let images;
    images= result.map(photo =>
        <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} title={photo.title} />
    );

    //rendering photos
    var temp = [];
    for (let i=0;i<images.length;i++){
        console.log(images.length);
        temp[i] = images[i]
    }

    //aos initialization
    useEffect(()=>{
        Aos.init({
            duration:1000,
            once:true,
            offset: -10,
        });
        Aos.refresh();
    },[])

    console.log (temp)

    return(
        <div>
            <ul>
                {
                    props.isLoaded ?
                        temp.map(function (item){
                            return <span data-aos="zoom-in-up" data-aos-delay="200" key={item.key} >{item}</span>
                        }) : null
                }
            </ul>
        </div>
    );
}

export default Image;

//Note: The Flickr API doesnot provide direct URL to render images,we have to construct it ourself.There could be
//some bumps while trying to improve the UI. If you have any better ideas for how the images could be rendered,they are welcome.
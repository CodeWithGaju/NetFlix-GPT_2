import React from 'react';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
    const TrailerVideo = useSelector(store=>store?.movies?.movieTrailer);

    useMovieTrailer(movieId);

   if(!TrailerVideo)return 
//   console.log(TrailerVideo.key)
   
  return (
    <div className='md:w-screen md:h-screen'>
       
       <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+TrailerVideo?.key+"?autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>


    </div>
  )
}

export default VideoBackground
// "type": "Trailer",
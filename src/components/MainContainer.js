import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';


const MainContainer = () => {
  useNowPlayingMovies();

  const moviesData = useSelector(store => store?.movies?.nowPlayingMovies);
  if(!moviesData)return;

  const mainMovie= moviesData[12];
  const {id,original_title,overview} = mainMovie;


  return (
    <div className=''>

     {/* video title */}
     <VideoTitle videoTitle={original_title} overView={overview}/>
     {/* video background  */}
     <VideoBackground movieId={id}/>
   
    </div>
  )
}

export default MainContainer
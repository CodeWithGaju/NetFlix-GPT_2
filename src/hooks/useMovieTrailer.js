import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailer } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    //Start:below hook useSelector is used to memoraization concept in which we resolve the problem of fetching already available data in our redux store
    const movie_trailer = useSelector(store=>store?.movies?.movieTrailer);
    //End here

 
    const movieVideo = async() =>{
        try{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?US",API_OPTIONS);
        const json = await data.json();
        const FiltermovieTrailer = json?.results?.filter(res=>res.type === "Trailer");
       const movieTrailer =  FiltermovieTrailer.length ? FiltermovieTrailer[0] : json.results[0];
      dispatch(addMovieTrailer(movieTrailer));
          }catch(err){
            console.log(err.message);
          }
     }
     useEffect(()=>{
      !movie_trailer &&  movieVideo();
    
     },[])
  
  return (
    <div>useMovieTrailer</div>
  )
}

export default useMovieTrailer;
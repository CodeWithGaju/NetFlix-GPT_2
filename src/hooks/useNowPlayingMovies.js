import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch();
    //Start:below hook useSelector is used to memoraization concept in which we resolve the problem of fetching already available data in our redux store
    const nowPlayingMovies = useSelector(store=>store?.movies?.nowPlayingMovies);
    //End here
    const fetchNowPlayingMovies = async()  => {
        try{
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing",API_OPTIONS);
       const json = await data.json();

     dispatch(addNowPlayingMovies(json?.results));
 
        }catch(err){
            console.log(err);
        }
     }
    useEffect(()=>{
        !nowPlayingMovies && fetchNowPlayingMovies();
    },[]);
}
export default useNowPlayingMovies;
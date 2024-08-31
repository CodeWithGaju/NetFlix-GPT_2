import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch();

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
       fetchNowPlayingMovies();
    },[]);
}
export default useNowPlayingMovies;
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
  const dispatch = useDispatch(); 

  const fetchUpcomingMovies = async() =>{
    try{
     const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
     const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
      }
      catch(err){
         console.log(err.message);
      }
    } 

    useEffect(()=>{
     fetchUpcomingMovies();
  },[]);

}

export default useUpcomingMovies;


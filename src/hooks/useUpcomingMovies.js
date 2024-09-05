import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
  const dispatch = useDispatch(); 
  //Start:below hook useSelector is used to memoraization concept in which we resolve the problem of fetching already available data in our redux store
 const upcomingMovies = useSelector(store=>store?.movies?.upcomingMovies);
 //End here
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
     !upcomingMovies  && fetchUpcomingMovies();
  },[]);

}

export default useUpcomingMovies;


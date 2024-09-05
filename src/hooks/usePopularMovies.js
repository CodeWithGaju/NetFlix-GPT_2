import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch(); 
  //Start:below hook useSelector is used to memoraization concept in which we resolve the problem of fetching already available data in our redux store
  const popularMovies = useSelector(store=>store?.movies?.popularMovies);
   //End here
  const fetchPopularMovies = async() =>{
    try{ const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS);
     const json = await data.json();
    dispatch(addPopularMovies(json.results));
    }catch(err){
       console.log(err.message);
    }
    } 

    useEffect(()=>{
      !popularMovies &&  fetchPopularMovies();
  },[]);

}

export default usePopularMovies;
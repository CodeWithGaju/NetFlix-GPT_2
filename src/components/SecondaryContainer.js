import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcominMovies from '../hooks/useUpcomingMovies';

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store=>store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector(store=>store?.movies?.popularMovies);
  const upcomingMovies = useSelector(store=>store?.movies?.upcomingMovies);
  usePopularMovies();
  useUpcominMovies();
  return (
    <div className='bg-black text-white'>
      <div className='-mt-5 md:-mt-28 text-white relative' >
       {nowPlayingMovies && <MovieList title={"Now Playing"} movie={nowPlayingMovies}/>}
      </div>
      
      <div>

      {upcomingMovies && <MovieList title={"Upcoming Movies"} movie={upcomingMovies} />}
      {popularMovies && <MovieList title={"Popular Movies"} movie={popularMovies}/>}
     
      </div>
      
     
      
    </div>
  )
}

export default SecondaryContainer
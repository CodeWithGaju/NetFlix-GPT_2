import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title,movie}) => {

  return (
    <div className='pl-5 pt-2 ml-3 h-96'>
        <h1 className='text-2xl pb-3 ml-3 font-semibold ' >{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar' >
          
            <div className=' flex h-70'>
   
             {
                movie.map(map=> <MovieCards movieData={map}/>)
             }

            </div>
            </div>
        
    </div>
  )
}

export default MovieList
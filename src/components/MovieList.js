import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title,movie}) => {

  return (
    <div className='relative z-10 md:px-2 pt-2 ml-3 h-60 md:h-96 overflow-hidden'>
        <h1 className='md:text-2xl pb-3 ml-3 md:font-semibold ' >{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar' >
          
            <div className=' flex '>
   
             {
                movie.map(map=> <MovieCards key={map.title} movieData={map}/>)
             }

            </div>
            </div>
        
    </div>
  )
}

export default MovieList
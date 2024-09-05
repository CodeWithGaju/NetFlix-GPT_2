import React from 'react'
import { IMAGE_API_URL } from '../utils/constants'

function MovieCards({movieData}) {
  const {poster_path,title,vote_average,release_date} = movieData;
  
  if(poster_path === null) return;
  return (
  
    <div className="md:mt-2">
        <div className='w-20 md:w-40  px-2 '>
          <img alt='Movie card' className='rounded-md' src={IMAGE_API_URL+poster_path} /> 
        </div>
        <h1 className='md:py-2 px-3 text-sm md:text-base font-light md:font-medium '>{title}</h1>
        <p className='text-xs md:text-sm px-3 font-thin opacity-70'>{release_date}</p>
    </div>
  )
}

export default MovieCards
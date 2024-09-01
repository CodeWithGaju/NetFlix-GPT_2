import React from 'react'
import { IMAGE_API_URL } from '../utils/constants'

function MovieCards({movieData}) {
  const {poster_path,title,vote_average,release_date} = movieData;
  return (
    <div className="mt-2 h-96">
        <div className=' w-40  px-2 '>
          <img alt='Movie card' className='rounded-md' src={IMAGE_API_URL+poster_path} /> 
        </div>
        <h1 className='py-2 px-3 font-medium'>{title}</h1>
        <p className='text-sm px-3 font-thin opacity-70'>{release_date}</p>
    </div>
  )
}

export default MovieCards
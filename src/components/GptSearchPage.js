import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_IMG } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <div className='absolute -z-0 w-full'>
         <div className='img-boxMain'>
             <img  src={BACKGROUND_IMG} className='h-screen object-cover md:h-auto fixed ' /> 
          </div>
        <GptSearchBar/>
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearchPage
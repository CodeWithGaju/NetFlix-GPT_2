import React from 'react'

const VideoTitle = ({videoTitle,overView}) => {
  return (
    <div className='md:w-screen aspect-video absolute md:pt-[25%] -mt-28 px-10 md:px-20 py-44 md:py-52 bg-gradient-to-r from-black text-white'>
        <h1 className='md:text-4xl font-bold md:p-3'>{videoTitle}</h1>
        <p className='text-xs md:text-lg w-1/2 md:w-1/3 p-1 md:p-3'>{overView}</p>
        <div>
            <button className='px-4 md:px-10 py-1 md:py-2 bg-white text-black md:m-2 rounded-sm font-bold hover:bg-opacity-80 '>▷ Play</button>
            <button className='px-4 md:px-8 py-1 md:py-2 bg-gray-600 bg-opacity-50 text-white m-2 rounded-sm md:font-bold hover:bg-opacity-100'>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
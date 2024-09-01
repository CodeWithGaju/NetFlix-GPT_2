import React from 'react'

const VideoTitle = ({videoTitle,overView}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[25%] -mt-28 px-20 py-52 bg-gradient-to-r from-black text-white'>
        <h1 className='text-4xl font-bold p-3'>{videoTitle}</h1>
        <p className='text-lg w-1/3 p-3'>{overView}</p>
        <div>
            <button className='px-10 py-2 bg-white text-black m-2 rounded-sm font-bold hover:bg-opacity-80 '>▷ Play</button>
            <button className='px-8 py-2 bg-gray-600 bg-opacity-50 text-white m-2 rounded-sm font-bold hover:bg-opacity-100'>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
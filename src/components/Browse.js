import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';

const Browse = () => {
  const movies = useSelector(store=>store.movies);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  const IsNowplaying = useSelector(store=>store.movies.nowPlayingMovies);
    if(movies===null)return;
  return (
    <div className='relative z-0'>
      
     <Header />
     {!showGptSearch ? <GptSearchPage/> :
     <>
     <MainContainer />
     <SecondaryContainer />
     {IsNowplaying &&  <Footer />} 
  
     </>
      }
     
</div>
  )
}

export default Browse
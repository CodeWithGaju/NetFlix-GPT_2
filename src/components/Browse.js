import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Footer from './Footer';
import { useSelector } from 'react-redux';

const Browse = () => {
  const movies = useSelector(store=>store.movies);
  

  return (
    <div className='relative z-0'>
      
     <Header />
     <MainContainer />
     <SecondaryContainer />
     <Footer />
</div>
  )
}

export default Browse
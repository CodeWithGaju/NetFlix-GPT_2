import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toogleGptSearchView } from '../utils/gptSlice';
import { lang } from '../utils/languageConstant';
import { setlanguage } from '../utils/languageSlice';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleToogleClick = () =>{
    dispatch(toogleGptSearchView())
  }

  const handleLanguage = (e) => {
      dispatch(setlanguage(e.target.value));
  };

  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid: uid,email: email,displayName: displayName,photoURL: photoURL}));
        navigate("/browser")
      } else {
    
        dispatch(removeUser());
        navigate("/");
      }

    });
   
    // Unsubscribe when copmonent unmounts
    return () => unsubscribe();
  },[]);


  return (

    <div className='absolute md:absolute  px-5 md:px-28  py-1 md:py-2  sm:py-1 bg-gradient-to-br w-full from-black flex justify-between z-10'>
   
       <img className='w-20 md:w-52 ' src={NETFLIX_LOGO} alt='logo'/>
      { user && <div className='h-5 mt-1 flex text-xs md:flex md:h-10 md:mt-3 md:text-base'>
                 {!showGptSearch  && <select className='px-1 py-[-1px] mr-1 md:px-3 md:py-2 md:mr-5  rounded-sm bg-gray-800 text-white' onClick={handleLanguage}>
                     {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)} 
                     </select>
                 }
                    <button className='px-1 md:px-5 md:py-2 bg-purple-900 rounded-md text-white' onClick={handleToogleClick}>{showGptSearch?"GPT Search":"HomePage"}</button>
                   { user.photoURL &&<img  className='md:w-8 md:h-8 rounded-full mx-2 my-1' alt="usericon" src={user.photoURL}/> }
                     <button onClick={handleSignOut} className='md:px-2 md:py-1 md:text-xl font-bold text-white'>Sign Out</button>
                 </div>
       }
       </div>

  
  )
}

export default Header
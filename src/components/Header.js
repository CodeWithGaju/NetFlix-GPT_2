import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { toogleGptSearchView } from '../utils/gptSlice';
import { setlanguage } from '../utils/languageSlice';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  const [UserInfo,setUserInfo] = useState(false);

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

  const handleUserInfo =() =>{
     setUserInfo(UserInfo ? false :true)
  }

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
   
       {/* <img className='w-20 md:w-52 ' src={NETFLIX_LOGO} alt='logo'/> */}
       <img className='w-20 md:w-40 ' src="https://fontmeme.com/permalink/240906/f72d935c1865967b34b5cc621dc2c172.png" alt="a-clockwork-orange-font" border="0"></img>
      { user && <div className='h-5 mt-1 flex text-xs md:flex md:h-10 md:mt-3 md:text-base'>
                 {!showGptSearch  && <select className='px-1 py-[-1px] mr-1 md:px-3 md:py-2 md:mr-5  rounded-sm bg-gray-800 text-white' onClick={handleLanguage}>
                     {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)} 
                     </select>
                 }
                    <button className='px-1 md:px-5 md:py-2 bg-purple-900 rounded-md text-white' onClick={handleToogleClick}>{showGptSearch?"GPT Search":"HomePage"}</button>
                   { user.photoURL &&<img  className='md:w-8 md:h-8 transition ease-linear hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  rounded-full ml-12 my-1' alt="usericon" src={user.photoURL} onClick={handleUserInfo}/> }
                  {UserInfo &&  <div className='absolute transition ease-linear hover:mt-14 hover:scale-105 rounded-md bg-white text-center text-xs md:text-base cursor-pointer  mt-10 ml-32 md:w-32 list-none '>
                      <li className='md:p-2  hover:bg-purple-950 hover:text-white'>Discussion</li>
                      <li className='md:p-2  hover:bg-purple-950 hover:text-white'>Lists</li>
                      <li className='md:p-2  hover:bg-purple-950 hover:text-white'>Ratings</li>
                      <li className='md:p-2  hover:bg-purple-950 hover:text-white'>WatchList</li>
                      <li className='md:p-2  hover:bg-purple-950 hover:text-white'>Edit Profile</li>
                      <li className='md:p-2  hover:bg-purple-950 hover:text-white'>Settings</li>
                      <button className='md:p-2 w-full  hover:bg-purple-950 hover:text-white' onClick={handleSignOut} >Sign Out</button>
                 
                     </div>}
               
                   
                 </div>
       }
       </div>

  
  )
}

export default Header
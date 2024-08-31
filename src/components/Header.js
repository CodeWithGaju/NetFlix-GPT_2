import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
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

    <div className='absolute px-28 py-2 bg-gradient-to-br w-full from-black flex justify-between z-10'>
   
       <img className='w-40' src={NETFLIX_LOGO} alt='logo'/>
      { user && <div className='flex h-10 mt-1'>
                   { user.photoURL &&<img  className='w-8 h-8 rounded-full mx-2 my-1' alt="usericon" src={user.photoURL}/> }
                     <button onClick={handleSignOut} className='px-2 py-1 text-xl font-bold text-white'>Sign Out</button>
                 </div>
       }
       </div>

  
  )
}

export default Header
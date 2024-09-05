import React, { useRef, useState } from 'react'
import Header from './Header'
import { CheckValidate } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import Footer from './Footer';
import { BACKGROUND_IMG, USER_AVATAR} from '../utils/constants';

function Login(){
  const [login_info,setLoginInfo] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const dispatch = useDispatch();
 
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

 const handleSubmit = () =>{
  
   const message = CheckValidate(email.current.value,password.current.value);
      
   setErrorMessage(message);

   if(message) return;

   if(!login_info){
    //Sign-Up Logic
    createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: USER_AVATAR,
         
        }).then(() => {
          // Profile updated!
          const {uid,email,displayName,photoURL} = auth.currentUser;;
          dispatch(addUser({uid: uid,email: email,displayName: displayName,photoURL: photoURL}));
         
          // ...
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message)
         
          // ...
        });
        
        // ...
      })
      .catch((err) => {
        if(err.message === "Firebase: Error (auth/network-request-failed)."){
          setErrorMessage("Ops! Please Check Your Internet Connection!");
        }
        else{
          setErrorMessage("Invalid Credentials Please check Email & Password!");
        }
      });  
   }
   else{
    //Sign-In Logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((err) => {
    if(err.message === "Firebase: Error (auth/network-request-failed)."){
      setErrorMessage("Ops! Please Check Your Internet Connection!");
    }
    else{
      setErrorMessage("Invalid Credentials Please check Email & Password!");
    }
  });
   }

 }

  const toggleOnClick =() =>{
     setLoginInfo(!login_info)
  }
  return (
    <div>
       <div className='background-kala'>
    
          <div className='img-boxMain' >
             <img  src={BACKGROUND_IMG} className='h-screen object-cover md:h-auto fixed '/> 
          </div>


       <Header />
      
              <div  className=' py-5 md:py-20 px-5 md:px-14 box-border bg-black bg-opacity-70 w-1/2 md:w-[400px]  m-auto  right-0 left-0 my-28 text-white z-10'>
                 <form onSubmit={(e)=>{e.preventDefault()}} className=''>
                  <h1 className='md:text-3xl font-bold my-1 md:my-3'>{login_info ? "Sign In" : "Sign Up "}</h1>
                  {!login_info && <input ref={name} type='text' placeholder='Full Name' className='p-1 md:p-2 text-xs md:text-base rounded-md my-2 w-full bg-transparent border-2 border-gray-500'/>}
                  <input ref={email} type='text' placeholder='Email or Mobile Number'  className='p-1 md:p-2 text-xs md:text-base rounded-md my-2  w-full bg-transparent border-2 border-gray-500'/>
                  <input  ref={password} type='password' placeholder='Password' className='p-1 md:p-2 text-xs md:text-base rounded-md my-2  w-full bg-transparent border-2 border-gray-500'/>
                 <p className='text-xs md:text-lg px-2 py-2 text-red-600 font-bold'>{errorMessage}</p>
                  <button onClick={handleSubmit} className='text-xs md:text-base bg-red-600 w-full my-2 py-1 md:py-2 rounded-md'>{login_info ? "Sign In" : "Sign Up"}</button>
                      <p className='text-center text-xs md:text-lg py-2' >OR</p>
                      {login_info===true &&  <button className='btn_bg-color text-center text-xs md:text-base font-bold w-full py-1 md:py-2 rounded-md'>Use Sign-In Code</button>}
                  <p className='md:py-5 text-xs md:text-base cursor-pointer mt-5 ' onClick={toggleOnClick}>{login_info ?"New to Dekhlo?Sign Up Now":"Already Registered Sign In Now"}</p>
               
                </form>
              </div>

       <Footer />

         </div>
    </div>
  )
}

export default Login

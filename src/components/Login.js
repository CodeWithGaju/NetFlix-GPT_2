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
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
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
    
          <div className='img-boxMain'>
             <img  src={BACKGROUND_IMG} /> 
          </div>

       <Header />
      
              <div  className='py-20 px-14 box-border bg-black bg-opacity-70 w-[400px] h-  m-auto  right-0 left-0 my-28 text-white z-10'>
                 <form onSubmit={(e)=>{e.preventDefault()}} className=''>
                  <h1 className='text-3xl font-bold my-3'>{login_info ? "Sign In" : "Sign Up "}</h1>
                  {!login_info && <input ref={name} type='text' placeholder='Full Name' className='p-2 rounded-md my-2 w-full bg-transparent border-2 border-gray-500'/>}
                  <input ref={email} type='text' placeholder='Email or Mobile Number'  className='p-2 rounded-md my-2  w-full bg-transparent border-2 border-gray-500'/>
                  <input  ref={password} type='password' placeholder='Password' className='p-2 rounded-md my-2  w-full bg-transparent border-2 border-gray-500'/>
                 <p className='px-2 py-2 text-red-600 font-bold text-lg'>{errorMessage}</p>
                  <button onClick={handleSubmit} className='bg-red-600 w-full my-2 py-2 rounded-md'>{login_info ? "Sign In" : "Sign Up"}</button>
                      <p className='text-center text-lg py-2' >OR</p>
                      {login_info===true &&  <button className='btn_bg-color text-center  font-bold w-full  py-2 rounded-md'>Use Sign-In Code</button>}
                  <p className='py-5 cursor-pointer mt-5 ' onClick={toggleOnClick}>{login_info ?"New to NetFlix?Sign Up Now":"Already Registered Sign In Now"}</p>
               
                </form>
              </div>

       <Footer />

         </div>
    </div>
  )
}

export default Login

      {/* <div className='absolute'>
       <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg"/> 
       </div> */}
    {/* <form className='absolute py-10 px-10 bg-black opacity-70 w-4/12 mx-auto right-0 left-0 my-36 text-white z-10'>
      <h1 className='text-2xl my-5'>{login_info===true ? "Sign In" : "Sign Up "}</h1>
      {login_info && <input type='text' placeholder='Full Name' className='p-2 rounded-md mt-3  w-full  bg-gray-500'/>}
      <input type='text' placeholder='Email or Mobile Number'  className='p-2 rounded-md mt-3 w-full bg-gray-500 '/>
      <input   type='password' placeholder='Password' className='p-2 rounded-md mt-3  w-full  bg-gray-500'/>
      <button className='bg-red-700 w-full mt-5 py-2 rounded-md'>{login_info===true?"Sign In":"Sign Up"}</button>

      <p className='py-6 cursor-pointer mt-5 ' onClick={toggleOnClick}>{login_info===true?"New to NetFlix?Sign Up Now":"Already Registered Sign In Now"}</p>
    </form> */}

    {/* <footer className='absolute bg-black w-full h-52 mt-[700px]'></footer> */}
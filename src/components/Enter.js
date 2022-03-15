import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';

const Enter = () => {
 
    const [isSignedIn,setIsSignedIn] = useState (localStorage.getItem('isSignedIn'));
    console.log(isSignedIn);
    
    return(
      <>
      
         {(isSignedIn==='true') ? 
         <Logout/> : <Login/>}
      </>
    )
   }

export default Enter
import React, { useState } from 'react'
import Login from './Login';
import Logout from './Logout';

const Enter = () => {
    
    const [isSignedIn] = useState (localStorage.getItem('isSignedIn'));
    console.log(isSignedIn);
    
    return(
      <>
      
         {(isSignedIn==='true') ? 
         <Logout/> : <Login/>}
      </>
    )
   }

export default Enter
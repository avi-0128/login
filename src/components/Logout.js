
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../Features/userSlice';
import Enter from './Enter';


const Logout = () => {

  const [flag,setFlag] = useState('true');

  const dispatch = useDispatch();
  const handleLogout = (e) => {
  //  e.preventDefault();
     dispatch(logout())
   // localStorage.clear();
     localStorage.setItem('isSignedIn' , 'false');
     setFlag('false');
  }
 const name = localStorage.getItem('name');
 
 
 
  return (<>
  
  { (flag==='true') ?
    <div>
            <nav className='navbar navbar-dark bg-dark justify-content-center'>
            
             <Link to='/home/email'  className='nav-link active'>Email</Link>
      
             <Link to='/home/phoneNumber' className='nav-link active'>Phone Number</Link>
            
             <Link to='/home/changePassword' className='nav-link active' >Change Password</Link>
             <button className='btn btn-dark' onClick={(e) => handleLogout(e)}>Logout</button>
             </nav>
             <div className='card text-center'>
               <div className='card-title'>
               <h1>Welcome <span>{name}</span></h1>
                 </div>
             
               </div>
            
       

    </div> : <Enter/>
     } 
    
    
    </>
  )
}

export default Logout
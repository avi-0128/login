import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../Features/userSlice';
import Enter from './Enter';

const Login = () => {

    const [ name, setName] = useState('');
    const [ email ,setEmail] = useState('');
    const [phnNum , setPhnnum] = useState('');
    const [pass, setPass] = useState('');
    const [isSignedIn,setIsSignedIn] = useState(localStorage.getItem('isSignedIn'));
    const dispatch = useDispatch()
    const handleSubmit = (e) => {

      e.preventDefault();
        if(name.trim() && phnNum.trim() && pass.trim() && email.trim() ){
        localStorage.setItem('name', name);
        localStorage.setItem('phoneNumber' , phnNum);
        localStorage.setItem('pass' , pass);
        localStorage.setItem('email' , email);
        localStorage.setItem('isSignedIn' , 'true');
        setIsSignedIn('true');
        dispatch(login({
            name : name,
            email : email,
            phoneNumber : phnNum,
            password : pass,
            isSignedIn : true
        }))
      }
      else alert(' all the fields are mandatory');
    }

  return (
    <div>{ (isSignedIn==='false') ? 
        <div className='card text-center'>
          <div className='card-body'>
        <form onSubmit={(e) => handleSubmit(e)}> 
            <h1 className='card-text'>Login Here</h1>
            <div className='form-group mx-sm-3 mt-2'>
            <input type='name' placeholder='John'  value={name} onChange={(e) => setName(e.target.value)}/><br/>
            <input type='email' placeholder='john@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            <input type='phone' placeholder='Phone Number'  value={phnNum} onChange={(e) => setPhnnum(e.target.value)}/><br/>
            <input type='password' placeholder='Password'  value={pass} onChange={(e) => setPass(e.target.value)}/><br/>
            <button type='submit' className='btn btn-primary mt-3'>Submit</button>
            </div>

        </form> </div></div> : <Enter/>}
    </div>
  )
}

export default Login
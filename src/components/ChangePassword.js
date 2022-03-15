import React, { useState } from 'react'

const ChangePassword = () => {
    const [pass,setPass] = useState( localStorage.getItem('pass'));
    const [flag,setFlag] = useState('false');
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('pass' , pass);
        alert('Password Changed Successfully');
        setFlag('true');
    }
  return (
      <> 
      <div className='card text-center'>
    <div className='card-text'> Current Password : {pass}</div>
    <form onSubmit={(e) => handleSubmit(e)}>
    <input type='password' placeholder='Enter New Password' value={pass} onChange={(e) => setPass(e.target.value)} />
    <button className='btn btn-dark' type='submit'>Submit</button>
    </form> </div>
    </>
    
  )
}

export default ChangePassword
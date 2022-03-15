import React from 'react'

const Email = () => {
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
  return (
    <div className='card text-center'>
      <div className='card-title '>Hi {name}!! <br/>Your email: {email}</div>
      </div>
    
  )
}

export default Email
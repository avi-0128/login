import React from 'react'

const Phone = () => {
    const phone = localStorage.getItem('phoneNumber');
    const name = localStorage.getItem('name');
  return (
    <div className='card text-center'>
      <div className='card-title '>Hi{name}!! <br/>To reach you:- {phone}</div>
      </div>
  )
}

export default Phone
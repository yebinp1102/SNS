import React from 'react'

const Input = ({ placeholder, name, type}) => {
  return (
    <input
      className='input'
      type={type}
      name={name}
      placeholder={placeholder}
    />
  )
}

export default Input
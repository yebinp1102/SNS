import React from 'react'

const Input = ({ name, type, handleChange, label, handleShowPassword, placeholder }) => {
  return (
    <input
      className='input'
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      label={label}
      handleShowPassword={handleShowPassword}
      autoComplete="off"
    />
  )
}

export default Input
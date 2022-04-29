import React from 'react'

const Input = ({ name, type, handleChange, label, handleShowPassword }) => {
  return (
    <input
      className='input'
      type={type}
      name={name}
      placeholder={name}
      onChange={handleChange}
      label={label}
      handleShowPassword={handleShowPassword}
      autoComplete="off"
    />
  )
}

export default Input
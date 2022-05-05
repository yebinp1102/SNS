import React from 'react'

const Input = ({ name, type, handleChange, label, placeholder, value }) => {
  return (
    <input
      className='input'
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      label={label}
      autoComplete="off"
      value={value}
    />
  )
}

export default Input
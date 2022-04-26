import React from 'react'

const Button = ({name, type, className, onClick}) => {
  return (
    <button onClick={onClick} className={className ? `btn ${className}` : `btn` } type={type}>{name}</button>
  )
}

export default Button
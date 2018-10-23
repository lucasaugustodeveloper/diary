import React from 'react'

const Input = ({ type, name, placeholder, txtClass }) => (
  <input type={type} name={name} className={txtClass} placeholder={placeholder} required />
);

export default Input

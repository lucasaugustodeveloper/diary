import React from 'react';

const Button = ({ type, className, txt }) => (
  <button type={type} className={className}>{txt}</button>
);

export default Button;

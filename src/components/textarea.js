import React from 'react';

const Textarea = ({ type, name, placeholder, txtClass }) => (
  <textarea className={txtClass} type={type} name={name} placeholder={placeholder} required></textarea>
);

export default Textarea;

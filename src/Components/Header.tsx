import React from 'react';

interface IHeaderProps{
    label:string;
    
}

const Header = ({label} : IHeaderProps) => {
  return (
    <div>
      <h1>{label}</h1>
    </div>
  )
}

export default Header

import React from 'react'

interface IButtonProps {
  label:string;
  handleClick:() => void
}


const Button = (props:IButtonProps) => {
  const {label, handleClick}= props;
  return (
   
      <button  onClick={handleClick}>{label}</button>
   
  )
}

export default Button

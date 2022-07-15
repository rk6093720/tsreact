import React, { useState } from 'react'

interface  ITodoaInputProps {
  onClick:(value:string) => void;
}

const TodoInput = ({onClick} : ITodoaInputProps) => {
    const [text, setText]= useState<string>("")
    const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
         setText(e.target.value);
    }
    const handleAdd:React.MouseEventHandler<HTMLButtonElement> =() =>{
        onClick(text);
    }
  return (
    <div>
        <input type={'text'} 
        value={text}
        onChange={changeHandler}/>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput
import axios, { AxiosResponse } from 'axios';
import React, { useState , useEffect} from 'react'
import Header from './Header'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export  interface  ITodoItems {
    id:number,
    title:string,
    status:boolean
}

const Todos = () => {
    const [todos , setTodo]= useState<ITodoItems[]>([]);
    const handleAdd =(title:string) => {
        const payload ={
            title,
            status:false,
            id:todos.length + 1
        };
       return axios.post("http://localhost:8080/todos",payload)
       .then(getTodos);
        // setTodo([ ...todos, payload])
    }
    // console.log(todos);
    const getTodos =()=>{
       axios.get("http://localhost:8080/todos")
    //    .then(({ data }: { data: ITodoItems[]}) =>{
    //     setTodo(data);
    //    })
    .then((response: AxiosResponse<ITodoItems[]>) => {
        const {data} = response;
        setTodo(data)
    })
    }

    useEffect(() => {
        getTodos()
    }, [])
  return (
    <>
        <Header label="Todos"/>
         <TodoInput  onClick={handleAdd}/>
         {
            todos.length > 0 && todos.map((item) => {
              return    <TodoItem key={item.id}{...item}/>
            })
         }
    </> 
  )
}

export default Todos
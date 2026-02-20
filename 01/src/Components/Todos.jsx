import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
function Todos() {
    const [input,setInput]=useState("");
    const dispatch=useDispatch();
    const buttonHandler=()=>{
        dispatch(addTodo(input));
        setInput("");
        console.log(input);
    }

  return (
    <div>
        <h1>The Todo App</h1>
        <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter a todo'/>
            <button onClick={buttonHandler}>Add Todo</button>
        </div>
    </div>
  )
}

export default Todos
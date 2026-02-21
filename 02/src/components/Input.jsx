import { useState } from "react"
import { addTodoAtom,filterModeAtom } from "../atoms"
import {useAtom} from "jotai"
function Input() {
    const [input, setInput] = useState('')
    const [, addTodo] = useAtom(addTodoAtom)
    const[,setmode]=useAtom(filterModeAtom)
  return (
    <div>
        <div>
            <h1>Enter your todos</h1>
        </div>
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} ype="text" placeholder='Enter todo' />
            <button onClick={()=>{
                addTodo(input)
                setInput('')
                console.log(input)
            } }>Add</button>

            <div>
                <button onClick={() => setmode("all")}>All</button>
                <button onClick={() => setmode("completed")}>Completed</button>
                <button onClick={() => setmode("active")}>Pending</button>
            </div>
        </div>
    </div>
  )
}

export default Input
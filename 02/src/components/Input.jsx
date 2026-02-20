import { useState } from "react"
import { addTodoAtom } from "../atoms"
import {useAtom} from "jotai"
function Input() {
    const [input, setInput] = useState('')
    const [, addTodo] = useAtom(addTodoAtom)
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
        </div>
    </div>
  )
}

export default Input
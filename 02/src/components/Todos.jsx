import { useAtom } from "jotai"
import {
  removeTodoAtom,
  toggleTodoAtom,
  editTodoAtom,
  fileteredTodosAtom
} from "../atoms"
import { useState } from "react"

function Todos() {
  const [filteredTodos] = useAtom(fileteredTodosAtom)
  const [, deleteTodo] = useAtom(removeTodoAtom)
  const [, toggleTodo] = useAtom(toggleTodoAtom)
  const [, editTodo] = useAtom(editTodoAtom)

  const [editingId, setEditingId] = useState(null)
  const [editingText, setEditingText] = useState("")

  const handleEdit = (id, text) => {
    setEditingId(id)
    setEditingText(text)
  }

  return (
    <div>
      <h1>Todos</h1>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>

            {editingId === todo.id ?
             (
              <>
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />

                <button
                  onClick={() => {
                    editTodo({ id: todo.id, text: editingText })
                    setEditingId(null)
                    setEditingText("")
                  }}
                >
                  Save
                </button>

                <button onClick={() => setEditingId(null)}>
                  Cancel
                </button>
              </>
            ) : 
            
            (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />

                {todo.completed ? <s>{todo.text}</s> : todo.text}

                <button onClick={() => handleEdit(todo.id, todo.text)}>
                  Edit
                </button>

                <button onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
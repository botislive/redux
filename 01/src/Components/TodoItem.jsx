import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, editTodo } from "../features/todo/todoSlice";
import { useState } from "react";

function TodoItem() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditText(item.text);
  };

  const saveEdit = () => {
    dispatch(editTodo({ id: editingId, text: editText }));
    setEditingId(null);
    setEditText("");
  };

  return (
    <div>
      <h3>Todo Items:</h3>

      <ol>
        {todos.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(toggleTodo(item.id))}
            />

            {editingId === item.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                {item.completed ? <s>{item.text}</s> : item.text}
                <button onClick={() => startEdit(item)}>Edit</button>
              </>
            )}

            <button onClick={() => dispatch(deleteTodo(item.id))}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoItem;
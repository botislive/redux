import {atom} from 'jotai'
import {nanoid} from 'nanoid'
import {atomWithStorage} from 'jotai/utils'

export const todosAtom = atomWithStorage("todos",[])

export const addTodoAtom = atom(null, (get, set, text) => {
  const currentTodos = get(todosAtom)
  set(todosAtom, [{id:nanoid(), text, completed:false},...currentTodos])
})

export const removeTodoAtom = atom(null, (get, set, index) => {
  const currentTodos = get(todosAtom)
  set(todosAtom, currentTodos.filter((todo) => todo.id !== index))
})

export const toggleTodoAtom = atom(null, (get, set, index) => {
  const currentTodos = get(todosAtom)
  set(todosAtom, currentTodos.map((todo) => {
    if (todo.id === index) {
      return {...todo, completed: !todo.completed}
    }
    return todo
  }))
})

export const editTodoAtom = atom(null, (get, set, {id, text}) => {
  const currentTodos = get(todosAtom)   
    set(todosAtom, currentTodos.map((todo) => {
      if (todo.id === id) {
        return {...todo, text}
      }
      return todo
    }))
})

export const filterModeAtom = atomWithStorage("filtermode",'all')

export const fileteredTodosAtom = atom((get) => {
  const todos = get(todosAtom)
  const filterMode = get(filterModeAtom)
  switch (filterMode) {
    case 'active':
      return todos.filter((todo) => !todo.completed)
    case 'completed':
      return todos.filter((todo) => todo.completed)
    default:
      return todos
  }
})


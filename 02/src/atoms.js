import {atom} from 'jotai'
import {nanoid} from 'nanoid'

export const todosAtom = atom([])

export const addTodoAtom = atom(null, (get, set, text) => {
  const currentTodos = get(todosAtom)
  set(todosAtom, [...currentTodos,{id:nanoid(), text, completed:false}])
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


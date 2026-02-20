import { createSlice,nanoid } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name:"todo",
    initialState:{
        todos:[{id:nanoid(),text:"Learn React",completed:false}],
    },
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                text:action.payload,
                completed:false,
            }
            state.todos.push(newTodo);
        },

        toggleTodo:(state,action)=>{
            const todo=state.todos.find(todo=>todo.id===action.payload);
            if(todo){
                todo.completed=!todo.completed;
            }
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id!==action.payload);
        },

        editTodo:(state,action)=>{
            const todo=state.todos.find(todo=>todo.id===action.payload.id);
            if(todo){
                todo.text=action.payload.text;
            }
        },
    
    }

});


export const{addTodo,toggleTodo,deleteTodo,editTodo}=todoSlice.actions;
export default todoSlice.reducer;
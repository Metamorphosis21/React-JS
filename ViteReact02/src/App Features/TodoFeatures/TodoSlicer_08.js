import { createSlice , nanoid } from "@reduxjs/toolkit";

// Reducer - is a function that takes the current state and an action as input, and returns a new state. It's a fundamental concept in Redux, and it's used to manage the state of your application.

// Slice -  is a higher-level concept (of reducer) that combines Reducer , State , Actions

const initialState = {
    todos : [ { id : 1 , text : "Hello world"} ]
}

export const todoSlicer = createSlice({
    name : 'CodeZter' ,  
    initialState ,
    // initialState : {                                 // Can give intialState inside and also outside
    //    todo : [{ id:1 , text:'Hello World'}]
    // }
    
    // reducers ( properties that has properties and functions)
    reducers: {
        addTodo: (state , action) => { 
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },             
        removeTodo: (state , action) => { 
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
        // make update , delete properties yourself
    }
})
// createSlice function usually takes objects as parameter

export const { addTodo , removeTodo } = todoSlicer.actions

export default todoSlicer.reducer
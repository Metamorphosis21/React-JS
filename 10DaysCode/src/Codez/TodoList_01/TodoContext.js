import { createContext , useContext} from "react";          
// Import createContext and useContext
// 'createContext' and 'useContext' are two related hooks that help you manage global state by creating a centralized store of values that can be accessed from any component in your application.
// 'createContext' is a function that creates a new context object. When you create a context, you can think of it as creating a "bucket" that holds a value that can be accessed from anywhere in your application.
// 'useContext' is a hook that allows you to access the value of a context from within a functional component. It takes a context object as an argument and returns the current value of that context.

export const TodoContext = createContext({
    todo : [
        {
            id : 1, 
            task : "Task 01",
            completed : false
        }
    ]
})

export const useTodo = () => {
    return useContext(TodoContext)
}
// 'useTodo' is a custom hook that returns the useContext hook of the 'TodoContext' that allows you to access the context value directly

export const TodoProvider = TodoContext.Provider
// providing the data of the todoContext through a variable
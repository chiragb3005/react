import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // here inside the array ill give how todos will look
    todos: [
        {
            id: 1, 
            todoMessage: 'message will appear here',
            completed: false,    
        } 
    ],
    addTodo: (todoMessage) => {},
    updateTodo: (id, todoMessage) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},


})

// exporting an hook here
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
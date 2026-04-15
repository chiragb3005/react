import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodo = () => {
    const data = localStorage.getItem("todos")
    return data ? JSON.parse(data) : []
}

const initialState = {
    todos: loadTodo()
}

// have to export two parts of reducer
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        // inside state we have whatever the currecnt state is (here it is initalState)
        // by action we can make change in the state
        // isnide action change is only done by reducers
        addTodo: (state, action) => {
            const todo = {
                id: nanoid( ),
                text: action.payload
            }
            // here pushing inside initalState created above the todo we just created making the functionality of addTodo
            // as initalState was created as an object we were able to push
            // "if todos was an object (not an array), push wouldn't work"
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // will apply filter and then match the id to rmeove the todo
            // overwriting the state.todos itslef to remove the todo
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            // whoever id is not getting match just bring them back and rest all remove it

        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload
            state.todos = state.todos.map((todo) => todo.id === id ? {...todo, text} : todo)
        },
        
        // another method of updating todos with the help of find
        
        // updateTodo: (state, action) => {
        //     const { id, text } = action.payload;
        //     const todo = state.todos.find((todo) => todo.id === id); // stored in a variable
        //     if (todo) {
        //         todo.text = text; // mutating the found object directly via Immer
        //     }
        // }   


    }
})

// here exporting the methods of reducers from todoSlice.action
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions


export const todoReducer = todoSlice.reducer    

// added updateTodo needs to recheck for consuming
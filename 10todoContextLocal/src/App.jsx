import { useEffect, useState } from 'react'
import './App.css'
import {TodoProvider} from './Context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  // inside this state we are having all todos 
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now() , ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    // as todo is an array we have to loop to match id of todo we want to change
    setTodos((prev) => prev.map((eachValue) => (eachValue.id === id ? todo : eachValue )))
    // try understanding this line again n again
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // check this again 
  // kya hii mst likha hai
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevValue) => prevValue.id === id ? {...prevValue, completed: !prevValue.completed} : prevValue ))
  }

  // if user already had some todos we have to first bring them on the screen from local storage

  // this can be done by useEffect Method

  useEffect(() => {
    // here i can directly get local storage 
    const todos = JSON.parse(localStorage.getItem('todos'))

    if(todos && todos.length > 0){
      setTodos(todos)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>

    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* <TodoItem /> */}
            {todos.map((todo) => (
              <div key={todo.id}
              className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
      </div>
    </div>

    </TodoProvider>
  )
}

export default App

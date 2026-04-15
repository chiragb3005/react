import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  const todos = useSelector((state) => state.todo.todos);

  // SAVE to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
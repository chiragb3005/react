import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../Features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = React.useState(null);
  const [editText, setEditText] = React.useState("");

  return (
    <>
      <div className="text-white text-3xl">Manage Your Todos</div>
      <br />
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            {/* TEXT OR INPUT */}
            {editId === todo.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="px-2 py-1 rounded"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            <div className="flex gap-2">
              
              {/* EDIT / SAVE BUTTON */}
              <button
                title={editId === todo.id ? "Save" : "Edit"}
                onClick={() => {
                  if (editId === todo.id) {
                    dispatch(updateTodo({ id: todo.id, text: editText }));
                    setEditId(null);
                  } else {
                    setEditId(todo.id);
                    setEditText(todo.text);
                  }
                }}
                className="text-white bg-blue-500 p-2 rounded hover:bg-blue-600"
              >
                {editId === todo.id ? (
                  //  SAVE ICON
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 3h12l3 3v15H3V3h3zm3 0v6h6V3"
                    />
                  </svg>
                ) : (
                  //  EDIT ICON
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"
                    />
                  </svg>
                )}
              </button>

              {/* DELETE BUTTON */}
              <button
                title="Delete"
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 p-2 rounded hover:bg-red-600"
              >
                {/* 🗑️ DELETE ICON */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 7h12M9 7v12m6-12v12M10 3h4a1 1 0 011 1v2H9V4a1 1 0 011-1z"
                  />
                </svg>
              </button>

            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
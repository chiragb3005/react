# 📝 Redux Toolkit Todo App

A simple and efficient Todo application built using **React** and **Redux Toolkit**, with support for adding, updating, deleting todos and persisting data using **localStorage**.

---

## 🚀 Features

* ➕ Add new todos
* 📝 Update existing todos (Edit & Save functionality)
* ❌ Delete todos
* 💾 Persistent storage using **localStorage**
* ⚡ Global state management using **Redux Toolkit**
* 🎨 Styled using **Tailwind CSS**

---

## 🧠 Tech Stack

* **React (Vite)**
* **Redux Toolkit**
* **React Redux**
* **Tailwind CSS**
* **JavaScript (ES6+)**

---

## 📂 Project Structure

```
src/
│
├── app/
│   └── store.js          # Redux store configuration
│
├── features/
│   └── todo/
│       └── todoSlice.js  # Slice (state + reducers + actions)
│
├── components/
│   ├── AddTodo.jsx       # Input + add functionality
│   └── Todo.jsx          # List + update + delete UI
│
├── App.jsx
└── main.jsx
```

---

## 🔁 How It Works

### 🧩 Redux Flow

```
Component → dispatch(action) → reducer → state update → UI re-render
```

---

### 📌 State Structure

```js
{
  todo: {
    todos: [
      { id: 1, text: "hello world" }
    ]
  }
}
```

---

### ⚙️ Core Logic

#### ➕ Add Todo

* Uses `nanoid()` for unique IDs
* Adds new todo to array

#### ❌ Remove Todo

* Uses `filter()` to remove by ID

#### 📝 Update Todo

* Uses `map()` to update specific todo
* Also implemented using `find()` (RTK mutation style)

---

## 💾 Local Storage Integration

### 🔹 Save Data

```js
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

---

### 🔹 Load Data

```js
const loadTodos = () => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};
```

Used inside `initialState` to persist data across reloads.

---

## 🎯 Key Concepts Learned

* Redux Toolkit (`createSlice`, `configureStore`)
* Difference between **mutable vs immutable updates**
* `useSelector` (read state)
* `useDispatch` (send actions)
* Managing global state vs local state
* Array methods (`map`, `filter`, `find`)
* Local storage persistence
* Conditional rendering in React

---

## ⚡ Installation & Setup

```bash
# Clone the repo
git clone <your-repo-link>

# Go to project folder
cd project-name

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 📸 Future Improvements

* ✅ Mark todo as completed
* ⌨️ Save on Enter key
* ❌ Cancel edit option
* 🌙 Dark/light theme toggle
* ☁️ Backend integration (API)

---

## 🙌 Conclusion

This project helped in understanding:

* Real-world usage of **Redux Toolkit**
* Managing and persisting application state
* Building scalable React applications

---

## 📧 Contact

If you want to connect or collaborate:

📩 Email: [chiragb3005@gmail.com](mailto:chiragb3005@gmail.com)

---

⭐ If you like this project, consider giving it a star!

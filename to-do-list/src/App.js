import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Handle input changes
  const handleInput = (event) => {
    setNewTodo(event.target.value);
  };

  // Add new todo
  const handlenewinput = () => {
    if (newTodo.trim() !== "") {
      const newTask = { text: newTodo, completed: false };
      setTodos([...todos, newTask]);
      setNewTodo("");
    }
  };

  // Toggle task completion
  const toggleCompletion = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Remove a specific todo
  const removetodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Clear all tasks
  const clearAll = () => {
    setTodos([]);
  };

  return (
    <div className="container">
      <h1>My To-Do List</h1>
      <div className="input-area">
        <input
          value={newTodo}
          type="text"
          id="taskInput"
          onChange={handleInput}
          placeholder="Add a new task..."
        />
        <button onClick={handlenewinput} id="addTask">
          Add
        </button>
      </div>
      <ul id="taskList">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(index)}
            />
            <span>{todo.text}</span>
            <button className="delete-button" onClick={() => removetodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {todos.length > 0 && (
        <div className="clear-all">
          <button className="clear-all-button" onClick={clearAll}>
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

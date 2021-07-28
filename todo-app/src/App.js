import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const statusHandler = (e) => {
    setStatus(e.target.textContent);
    filterHandler();
  }

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((el) => el.completed));
        break;
      case "Active":
        setFilteredTodos(todos.filter((el) => !el.completed));
        break;
      case "All":
        setFilteredTodos(todos);
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const clearCompleted = () => {
    setTodos(todos.filter((el) => !el.completed));
  };

  useEffect(() => {
    filterHandler();
  }, [todos,status]);

  return (
    <div className="App mx-auto flex-auto p-12 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 font-mono">
      <header>
        <h1 className="text-center text-white text-2xl">Aurele's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
      />
      <div className="grid grid-flow-col auto-cols-max justify-center">
        <div className="p-1 border">
          <span>items left</span>
        </div>
        <div className="p-1 ml-1 border">
          <button onClick={statusHandler}>All</button>
        </div>
        <div className="p-1 ml-1 border">
          <button onClick={statusHandler}>Active</button>
        </div>
        <div className="p-1 ml-1 border">
          <button onClick={statusHandler}>Completed</button>
        </div>
        <div className="p-1 ml-1 border">
          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
      </div>
    </div>
  );
}

export default App;

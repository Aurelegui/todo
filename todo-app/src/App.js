import './App.css';
import React, { useState } from 'react'
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App mx-auto flex-auto p-12 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 font-mono">
      <header>
        <h1 className="text-center text-white text-2xl">Aurele's Todo List {inputText}</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;

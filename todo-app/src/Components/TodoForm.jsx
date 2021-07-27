import React, { useState } from "react";
import uuid from "react-uuid";

export function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  // prevent from refreshing
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: uuid(),
      text: input,
    });
    setInput('');
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a Todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
      </form>
      <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        add todo
      </button>
    </div>
  );
}

export default TodoForm;

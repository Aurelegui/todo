import React from "react";
import uuid from 'react-uuid'


function Form({ setInputText, setTodos, todos, inputText }) {
  // Sets text when change input
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  // prevent from refreshing page when pressing enter
  // Fill Todos with data
  const submitTodoHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTodos([...todos, { text: inputText, isActive: true, completed: false, id: uuid() }
      ]);
      setInputText('');
    }
  };

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <form>
        <input
          type="text"
          placeholder="Add Todo Here"
          className="todo-input w-full lg:w-3/4 lg:max-w-lg"
          onChange={inputTextHandler}
          onKeyDown={submitTodoHandler}
          value={inputText}
        />
        {/* <button className="todo-button border" type="submit">
          Submit
        </button> */}
      </form>
    </div>
  );
}

export default Form;

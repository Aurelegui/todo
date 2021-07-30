import React from "react";
import uuid from "react-uuid";
import TextField from "@material-ui/core/TextField";


function Form({ setInputText, setTodos, todos, inputText }) {
  // Sets text when change input
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  // prevent from refreshing page when pressing enter
  // Fill Todos with data
  const submitTodoHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputText.replace(/\s/g, "").length) {
        setTodos([
          ...todos,
          {
            text: inputText.replace(/\s+/g, " ").trim(),
            isActive: true,
            completed: false,
            id: uuid(),
          },
        ]);
      }
      setInputText("");
    }
  };

  return (
      <form>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          placeholder="Add Todo Here"
          className="todo-input w-full lg:w-3/4 lg:max-w-lg"
          onChange={inputTextHandler}
          onKeyDown={submitTodoHandler}
          value={inputText}
        />
      </form>
  );
}

export default Form;

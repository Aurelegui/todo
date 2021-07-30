import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Todo({ text, todo, todos, setTodos }) {

  const onChangeHandler = (e) => {
    console.log(e.target.value)
  }

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
            isActive: !el.isActive,
          };
        }
        return el;
      })
    );
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        className={`flex items-center 
          ${todo.completed ? "text-gray-400" : "text-current"}`}
        type="text"
        defaultValue={text}
        onChange={onChangeHandler}
      />
      <Button variant="contained" color="primary" onClick={deleteHandler}>Del</Button>
      <Button variant="contained" color="primary" onClick={completedHandler}>Done</Button>
    </div>
  );
}

export default Todo;

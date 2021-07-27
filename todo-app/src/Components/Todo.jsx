import React from "react";

function Todo({text, id, isActive, completed, todo, todos, setTodos}) {

  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  };

  const completedHandler = () => {
    setTodos(todos.map(el => el.completed !== todo.id))
  };

  return (
    <div>
      <input className="flex items-center justify-center" type="text" defaultValue={text} />
      <button onClick={deleteHandler}>Del</button>
      <button onClick={completedHandler}>Done</button>
    </div>
  );
}

export default Todo;

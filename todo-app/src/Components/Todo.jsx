import React from "react";

function Todo({ text, id, isActive, completed, todo, todos, setTodos }) {
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
      <input
        className={`flex items-center justify-center 
        ${todo.completed ? "text-gray-400" : "text-current"}`}
        type="text"
        defaultValue={text}
      />
      <button onClick={deleteHandler}>Del</button>
      <button onClick={completedHandler}>Done</button>
    </div>
  );
}

export default Todo;

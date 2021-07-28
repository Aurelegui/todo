import React from "react";
import Todo from "./Todo";

function TodoList({
  todos,
  setTodos,
  filteredTodos,
  setFilteredTodos,
}) {

  return (
    <div className="">
      {filteredTodos.map((todo) => (
        <Todo
          setTodos={setTodos}
          todos={todos}
          text={todo.text}
          key={todo.id}
          todo={todo}
          setFilteredTodos={setFilteredTodos}
          filteredTodos={filteredTodos}
        />
      ))}
    </div>
  );
}

export default TodoList;

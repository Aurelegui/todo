import React from "react";
import Todo from "./Todo";
import Box from "@material-ui/core/Box";

function TodoList({ todos, setTodos, filteredTodos, setFilteredTodos }) {
  return (
    <Box>
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
    </Box>
  );
}

export default TodoList;

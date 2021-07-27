import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  // const [textInput, textInputState] = useState('');

  console.log(todos);
  return (
    <div className="">
      {todos.map((todo) => (
        <Todo
          setTodos={setTodos}
          todos={todos}
          text={todo.text}
          key={todo.id}
          todo={todo}
        />
      ))}
    
      <div className="grid grid-flow-col auto-cols-max justify-center">
        <div className="p-1 border">
          <span>items left</span>
        </div>
        <div className="p-1 ml-1 border">
          <button onClick={() => {}}>All</button>
        </div>
        <div className="p-1 ml-1 border">
          <button onClick={() => {}}>Active</button>
        </div>
        <div className="p-1 ml-1 border">
          <button onClick={() => {}}>Completed</button>
        </div>
        <div className="p-1 ml-1 border">
          <button onClick={() => {}}>Clear Completed</button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;

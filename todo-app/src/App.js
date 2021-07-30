import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [todosActive, setTodosActive] = useState([]);

  const statusHandler = (e) => {
    setStatus(e.target.textContent);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((el) => !el.completed));
  };

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "Completed":
          setFilteredTodos(todos.filter((el) => el.completed));
          break;
        case "Active":
          setFilteredTodos(todos.filter((el) => !el.completed));
          break;
        case "All":
          setFilteredTodos(todos);
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    const countTodosLeft = () => {
      setTodosActive(todos.filter((el) => !el.completed));
    };
    filterHandler();
    countTodosLeft();
  }, [todos, status]);

  return (
    <Container component="main" maxWidth="sm">
      <Paper>
        <Grid>
          <Grid item>
            <header>
              <h1 className="text-center text-white text-2xl">
                Aurele's Todo List
              </h1>
            </header>
          </Grid>
          <Grid item>
            <Form
              todos={todos}
              setTodos={setTodos}
              inputText={inputText}
              setInputText={setInputText}
              filteredTodos={filteredTodos}
              setFilteredTodos={setFilteredTodos}
            />
          </Grid>
          <Grid item>
            <TodoList
              setTodos={setTodos}
              todos={todos}
              filteredTodos={filteredTodos}
              setFilteredTodos={setFilteredTodos}
            />
          </Grid>
          <span>{todosActive.length} items left</span>
          <Button variant="contained" color="primary" onClick={statusHandler}>
            All
          </Button>
          <Button variant="contained" color="primary" onClick={statusHandler}>
            Active
          </Button>
          <Button variant="contained" color="primary" onClick={statusHandler}>
            Completed
          </Button>
          <Button variant="contained" color="primary" onClick={clearCompleted}>
            Clear Completed
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;

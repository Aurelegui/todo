import logo from './logo.svg';
import './App.css';
// import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';


function App() {
  return (
    <div className="todo-app">
        {/* <TodoForm /> */}
        <TodoList/>
    </div>
  );
}

export default App;

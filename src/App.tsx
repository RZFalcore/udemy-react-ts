import React, {useState} from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from './models/todo';

const defaultTodos = [new Todo("Go for a walk"), new Todo("Eat snacks")];

function App() {
  const [todos, setTodos] = useState(defaultTodos);

  const addTodoHandler = (todoText: string) => { 
    setTodos(todoText);
  }

  return <div>
    <h1>Typescript</h1>
    <NewTodo onAddTodo={addTodoHandler} />
    <Todos items={todos}/>
    </div>
}

export default App;

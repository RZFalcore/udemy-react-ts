import React from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from './models/todo';

function App() {
  const todos = [new Todo("Go for a walk"), new Todo("Eat snacks")]
  return <div>
    <h1>Typescript</h1>
    <NewTodo/>
    <Todos items={todos}/>
    </div>
}

export default App;

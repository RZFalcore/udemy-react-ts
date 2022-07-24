import React from "react";
import Todos from "./components/Todos";
import Todo from './models/todo';

function App() {
  const todos = [new Todo("Go for a walk"), new Todo("Eat snacks")]
  return <div>
    <h1>Typescript</h1>
    <Todos items={todos}/>
    </div>
}

export default App;

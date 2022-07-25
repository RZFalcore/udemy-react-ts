import React, {useState} from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

import Todo from './models/todo';

const defaultTodos = [new Todo("Go for a walk"), new Todo("Eat snacks")];

function App() {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const addTodoHandler = (todoText: string) => { 
    const newTodo = new Todo(todoText);
    setTodos(prevState => prevState.concat(newTodo));
  }

  const removeTodoHandler = (id: number) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  }

  return <div>
    <h1>Typescript</h1>
    <NewTodo onAddTodo={addTodoHandler} />
    <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
}

export default App;

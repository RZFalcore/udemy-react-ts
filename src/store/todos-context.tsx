import React, { ReactNode, useState } from 'react'
import Todo from '../models/todo'

const defaultTodos = [new Todo("Go for a walk"), new Todo("Eat snacks")];

type TodoContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: number) => void
};

export const TodosContext = React.createContext<TodoContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: number) => { }
});


const TodosContextProvider: React.FC<{children: ReactNode}> = (props) => {
    const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const addTodoHandler = (todoText: string) => { 
    const newTodo = new Todo(todoText);
    setTodos(prevState => prevState.concat(newTodo));
  }

  const removeTodoHandler = (id: number) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  }
    
    const contextValue :TodoContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo:removeTodoHandler
    }
  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}

export default TodosContextProvider;
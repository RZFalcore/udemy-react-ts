import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import styles from './Todos.module.css'

const Todos: React.FC<{items: Todo[], onRemoveTodo: (id: number) => void}> = ({items, onRemoveTodo}) =>  { 
    return <ul className={styles.todos}>
        {items.map(item =>
            <TodoItem key={item.id} id={item.id} text={item.text} onRemoveTodo={onRemoveTodo.bind(null, item.id)} />)}
    </ul>
};

export default Todos;
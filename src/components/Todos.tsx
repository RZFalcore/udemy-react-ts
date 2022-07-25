import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import styles from './Todos.module.css'

const Todos: React.FC<{items: Todo[]}> = ({items}) =>  { 
    return <ul className={styles.todos}>
        {items.map(item => <TodoItem key={item.id} id={item.id} text={item.text}/>)}
    </ul>
};

export default Todos;
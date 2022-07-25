import React, {useContext} from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';

import styles from './Todos.module.css';

const Todos: React.FC = () => { 
    const todoContext = useContext(TodosContext)
    return <ul className={styles.todos}>
        {todoContext.items.map(item =>
            <TodoItem
                key={item.id}
                id={item.id}
                text={item.text}
                onRemoveTodo={todoContext.removeTodo.bind(null, item.id)} />)}
    </ul>
};

export default Todos;
import React from 'react';
import styles from './TodoItem.module.css'

const TodoItem: React.FC<{ id: number, text: string, onRemoveTodo: () => void }>
    = ({ id, text, onRemoveTodo }) => {
    return (
        <li className={styles.item} key={id} onClick={onRemoveTodo}>
            <h6>{id}</h6>
            <p>{text}</p>
        </li>
    );
}

export default TodoItem;
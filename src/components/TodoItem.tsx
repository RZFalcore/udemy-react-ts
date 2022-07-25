import React from 'react';
import styles from './TodoItem.module.css'

const TodoItem: React.FC<{ id: number, text: string }> = ({ id, text }) => {
    return (
        <li className={styles.item} key={id}>
            <h6>{id}</h6>
            <br/>
            <p>{text}</p>
        </li>
    );
}

export default TodoItem;
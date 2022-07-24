import React from 'react';

const TodoItem: React.FC<{ id: number, text: string }> = ({id, text}) => {
    return (
        <li key={id}>
            <h6>{id}</h6>
            <br/>
            <p>{text}</p>
        </li>
    );
}

export default TodoItem;
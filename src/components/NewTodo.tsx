import React, { useContext, useRef } from 'react';
import { TodosContext } from '../store/todos-context';
import styles from './NewTodo.module.css'

const NewTodo: React.FC = () => {
    const todoContext = useContext(TodosContext);
    
    const todoInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        //  If value definitly will be not nullish : 
        const text = todoInputRef.current!.value;
        //  otherwise :
        // const text = todoInputRef.current?.value;

        if (text.trim().length === 0) {
            // Throw Error
            return
        }
        
        todoContext.addTodo(text);
        todoInputRef.current!.value = "";
    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <label htmlFor="todo">Todo text:</label>
            <input type="text" name="todo" id="todo" ref={todoInputRef}/>
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;
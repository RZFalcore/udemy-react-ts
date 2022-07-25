import React, { useRef } from 'react';

const NewTodo = () => {
    const todoInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const text = todoInputRef.current?.value;

        //  If value definitly will be not nullish : 
        // const text = todoInputRef.current!.value;

        if (text?.trim().length === 0) {
            // Throw Error
            return
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="todo">Todo text:</label>
            <input type="text" name="todo" id="todo" ref={todoInputRef}/>
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;
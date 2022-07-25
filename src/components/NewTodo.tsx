import React from 'react';

const NewTodo = () => {
    return (
        <form>
            <label htmlFor="todo">Todo text:</label>
            <input type="text" name="todo" id="todo" />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;
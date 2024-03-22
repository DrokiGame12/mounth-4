import React, { useState } from 'react';
import classes from './Todo.module.css';

const Todo = ({todo,handleDelete, handleEdit}) => {

    const [inputEdit, setInputEdit] = useState(todo.title)
    const inputEditChange = (event) => {
        setInputEdit(event.target.value)
    }

    return (
        <li className={classes.todo}>
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
            {todo.editing ? 
                <>
                    <input type='text' value={inputEdit} onChange={inputEditChange}/>
                    <button onClick={() => handleDone(todo.id, inputEdit)}>Done</button>
                </> :
                <button onClick={() => handleEdit(todo.id)}>Edit</button>}
            
            <button onClick={() => handleDelete(todo.id)}>
                Delete
            </button>
            
        </li>
    );
};

export default Todo;
import React, { useState } from 'react';
import classes from './Todo.module.css';

const Todo = ({ todo, handleDelete, handleEdit, handleDone }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [inputEdit, setInputEdit] = useState(todo.title)
    const inputEditChange = (event) => {
        setInputEdit(event.target.value)
    }

    return (
        <>
        {isEditing &&
            <li>
                <input type='text' value={inputEdit} onChange={inputEditChange}/>
                <button onClick={() => {
                    handleEdit(todo.id, inputEdit)
                    setIsEditing(false)
                }}>Save</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
            </li>}
        <li className={todo.completed ? classes.todo_yes : classes.todo_no}>
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
            {!isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
            <button onClick={() => handleDone(todo.id)}>Done</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
        </>
    );
};

export default Todo;
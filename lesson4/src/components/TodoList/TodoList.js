import React from 'react';
import Todo from '../Todo/Todo';
import classes from './TodoList.module.css';


const TodoList = ({tasks, handleDelete, handleEdit, handleDone}) => {
    return (
        <ul className={classes.list}>
            {
                tasks.map(item=> <Todo
                    key={item.id}
                    todo={item}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleDone={handleDone}/>)
            }
        </ul>
    );
};

export default TodoList;
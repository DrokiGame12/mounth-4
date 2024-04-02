import React from 'react'
import classes from './TodoList.module.sass'
import Todo from '../todo/Todo';

const TodoList = ({ todoList, handleDone, handleDelete }) => {
	return (
		<div className={classes.list}>
			{todoList.map(todo => <Todo todo={todo} handleDone={handleDone} handleDelete={handleDelete}/>)}
		</div>
	);
};

export default TodoList
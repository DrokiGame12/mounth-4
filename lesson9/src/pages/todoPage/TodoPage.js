import React, { useState } from 'react';
import classes from './TodoPage.module.sass'
import TodoList from '../../components/todoList/TodoList';

const TodoPage = () => {
	const [todoList, setTodoList] = useState([])
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = (event) => {
		setInputValue(event.target.value)
		console.log(todoList);
	}
	const handleAdd = () => {
		setTodoList(prev => [...prev, {
			id: todoList.length===0 ? 0 : todoList[todoList.length-1].id+1,
			name: inputValue,
		}])
		setInputValue('')
	}

	const handleDone = (id, value) => {
		setTodoList(todoList.map(todo => {
			if(todo.id === id){
				return {...todo, name: value}
			} 
			return todo
		}))
	}

	const handleDelete = (id) => {
		setTodoList(todoList.filter(todo => todo.id!==id))
	}
	const handleClear = () => {
		setTodoList([])
	}

	return (
		<div className={classes.todo_page}>
			<div className={classes.header}>
				<h1>TO DO</h1>
				<div className={classes.control}>
					<label className={classes.input}>
						<input
							value={inputValue}
							placeholder='Enter a task'
							onChange={handleInputChange}
							/>
					</label>
					<div className={classes.buttons}>
						<button disabled={!inputValue} onClick={handleAdd}>Add task</button>
						{todoList.length!==0 && <button onClick={handleClear}>Clear all</button>}
					</div>
				</div>

			</div>
			{todoList.length!==0 && 
				<TodoList 
					todoList={todoList} 
					handleDone={handleDone} 
					handleDelete={handleDelete}/>}
		</div>
	);
};

export default TodoPage;
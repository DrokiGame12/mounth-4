import React, { useState } from 'react'
import classes from './Todo.module.sass'
import editImg from './edit.svg'
import deleteImg from './delete.svg'

const Todo = ({ todo, handleDone, handleDelete }) => {
	const [edit, setEdit] = useState(false)
	const [inputValue, setInputValue] = useState(todo.name)
	const handleEdit = () => {
		setInputValue(todo.name)
		setEdit(!edit)
	}
	const handleInputChange = (event) => {
		setInputValue(event.target.value)
	}
	
	return (
		<div className={classes.todo}>
			<label className={classes.name}>
				{edit ? 
					<input
						value={inputValue}
						onChange={handleInputChange}/> : 
					<p>{todo.name}</p>
				}
			</label>
			<div className={edit ? classes.buttons_edit : classes.buttons}>
				{edit ?
					<>
						<button onClick={handleEdit}>Cancel</button>
						<button disabled={inputValue===''} onClick={() => {
							handleDone(todo.id, inputValue)
							setEdit(false)
						}}>Save</button> 
					</>
					:
					<>
						<button onClick={handleEdit}><img src={editImg} alt='edit'/></button>
						<button onClick={() => handleDelete(todo.id)}><img src={deleteImg} alt='delete'/></button>
					</>
				}
			</div>
		</div>
	);
};

export default Todo
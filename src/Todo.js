import React from 'react';

function getName(){
	const input = document.querySelector('#todoInput')
	return input.value
}

function TodoList(todos) {
	const block = document.querySelector('.todo_block')
	let list = ''
	for(let todo in todos){
		todo === '' || (list += todos[todo])
	}
	block.innerHTML = list
	
	// getName() === '' || (block.innerHTML += `<div>${getName()}</div>`)
}

class Todo extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			todoNames: {}
		}
	}

	render(){
		return(
			<div className='todo'>
				<div className='todo_title'>
					<input id='todoInput'/>
					<button 
						id = 'todoButton' 
						onClick = {() => {
							if(!this.state.todoNames[getName()]){
								this.state.todoNames[getName()] = `<div>${getName()}</div>`
								TodoList(this.state.todoNames)
							} else {
								alert('Уже есть!')
							}
						}}
					>&#10010;</button>
				</div>
				<div className='todo_block'></div>
			</div>
		)
	}
}

export default Todo
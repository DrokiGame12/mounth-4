import React, { useState } from 'react'
import TodoList from '../../components/TodoList/TodoList';

const TodoPage = () => {
    const [tasks, setTasks] = useState([
        {
            id:1 ,
            title: 'coding',
            completed: false,
            editing: false
        },
        {
            id:4,
            title: 'eat',
            completed: false,
            editing: false
        },
        {
            id:5,
            title: 'sleep',
            completed: false,
            editing: false
        }
    ])

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }


    const [inputTask, setInputTask] = useState('')
    const handleChangeInput = (event) => {
        setInputTask(event.target.value)
    }

    const handleAdd = () => {
        setTasks([...tasks, {
            id: tasks.length > 0 ? tasks[tasks.length-1].id+1 : 1,
            title: inputTask,
            completed: false,
            editing: false
        }])
    }

    const handleDone = () => {
        
    }

    const handleEdit = (id, inputEdit) => {
        
    }

    return (
        <>
            <TodoList
                tasks={tasks}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleDone={handleDone}/>
            <div>
                <input type='text' value={inputTask} onChange={handleChangeInput}/>
                <button onClick={handleAdd}>Add todo</button>
            </div>
        </>
    );
};

export default TodoPage;
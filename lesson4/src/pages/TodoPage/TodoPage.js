import React, { useEffect, useState } from 'react'
import TodoList from '../../components/TodoList/TodoList';

const TodoPage = () => {
    const [tasks, setTasks] = useState([
        {
            id:1 ,
            title: 'coding',
            completed: false,
        },
        {
            id:4,
            title: 'eat',
            completed: false,
        },
        {
            id:5,
            title: 'sleep',
            completed: false,
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
            completed: false
        }])
    }

    const handleEdit = (id, newTitle) => {
        setTasks(tasks.map(task => {
            return task.id === id ? {...task, title: newTitle} : task
        }))
    }
    const handleDone = (id) => {
        setTasks(tasks.map(task => {
            return task.id===id ? {...task, completed:!task.completed} : task
        }))
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
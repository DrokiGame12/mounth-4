import React, { useEffect, useState } from 'react';
import Buttons from '../../components/buttons/Buttons';
import User from '../user/User';
import Example from '../../components/example/Example';
import Header from '../../components/header/Header';
import Modal from '../../components/modal/Modal';
import Input from '../../components/input/Input';
import TodoList from '../../components/TodoList/TodoList';
import Button from '../../components/button/Button';


const MainPage = () => {
    const [ show, setShow ] = useState(false);
    const [ tasks, setTasks ] = useState([]);
    const handleShow = () => {
        setShow(!show);
    };
    const [ inputTask, setInputTask ] = useState('');
    const onChangeInputTask = (event) => {
        setInputTask(event.target.value);
    };
    
    const handleAdd = () => {
        setTasks(prev => [ ...prev, {
            id: tasks.length === 0 ? 1 : tasks[ tasks.length - 1 ].id + 1,
            title: inputTask,
            completed: false
        } ]);
    };

    const handleDone = (id) => {
        console.log(id);
        tasks.map(task => {
            if (task.id === id) {
                return task.completed = !task.completed;
            }
        });
        setTasks([ ...tasks ]);
    };

    const handleEdit = (editTodo) => {
        console.log(editTodo);
        tasks.map(task => {
            if (task.id === editTodo.id) return task.title = editTodo.title;
        });
        setTasks([ ...tasks ]);
    };


    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const sendLocalStorage = () => {
        localStorage.setItem('name', 'Akel');
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const getLocalStorage = () => {
        console.log(JSON.parse(localStorage.getItem('tasks')));
    };

    useEffect(() => {
        const myLocalStorage = JSON.parse(localStorage.getItem('tasks'));
        if (myLocalStorage === null) {
            return localStorage.setItem('tasks', JSON.stringify(tasks))
        }
        if (myLocalStorage.length !==0) {
            setTasks(myLocalStorage)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);

    const clearTasks = () => {
        setTasks([])
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    const [filterValue, setFilterValue] = useState('allTasks')

    return (
        <>
            <Button title={'LocalStorage'} action={sendLocalStorage}/>
            <Button title={'GetLocalStorage'} action={getLocalStorage}/>
            <Button title={'ClearTasks'} action={clearTasks}/>
            <label>
                Filter:
                <select onChange={event => setFilterValue(event.target.value)}>
                    <option value={'allTasks'}>Все таски</option>
                    <option value={'completedTasks'}>Выполненные таски</option>
                    <option value={'unCompletedTasks'}>Не выполненные таски</option>
                </select>
            </label>

            {show &&
                <Modal handleShow={handleShow}
                       onChangeInputTask={onChangeInputTask}
                       handleAdd={handleAdd}
                ></Modal>
            }

            <TodoList
                tasks={tasks}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
                filterValue={filterValue}
            />
            <Button title={'Открыть'} action={handleShow}/>
        </>
    );
};

export default MainPage;
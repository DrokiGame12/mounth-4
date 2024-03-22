import React, { useState } from "react";
import Todo from "../todo/Todo";
import classes from "./TodoList.module.css";

const TodoList = ({
  tasks,
  handleDelete,
  handleDone,
  handleEdit,
  filterValue
}) => {
  const [currentEdit, setCurrentEdit] = useState("");

	const HandleFilterTasks = (value) => {
		if(value.value==='completedTasks'){
			tasks = tasks.filter(task => task.completed)
		}else if(value.value==='unCompletedTasks'){
			tasks = tasks.filter(task => !task.completed)
		}
		console.log(value);
		return (
			<>{tasks.map(item => <Todo
				key={item.id}
				todo={item}
				handleDelete={handleDelete}
				handleDone={handleDone}
				handleEdit={handleEdit}
				handleCurrentEdit={setCurrentEdit}
				isEdit={currentEdit === item.id}
			/>)}</>
		)
	}

  return (
    <ul className={classes.list}>
			<HandleFilterTasks value={filterValue}/>
    </ul>
  );
};

export default TodoList;

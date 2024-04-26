import React from "react";
import Task from "./Task";


function TaskList({tasks, deleteTask , click}) {
  const tasksList = tasks.map((task, index) =>
  <Task
    key={index}
    task={task}
    text={task.text}
    category={task.category}
    click={click}
  />)
  return (
    <div className="tasks">{tasksList}
    </div>
  );
}

export default TaskList;
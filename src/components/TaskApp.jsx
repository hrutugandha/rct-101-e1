import React from "react";

import styles from "./taskApp.module.css";
import TaskHeader from './TaskHeader/TaskHeader.jsx'
import AddTasks from './AddTask/AddTask.jsx'
import Tasks from './Tasks/Tasks.jsx'
import data from '../data/tasks.json'

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader/>
      <AddTasks/>
      <Tasks  data={data}/>
    </div>
  );
};

export default TaskApp;

import React from "react";
import Counter from '../Counter/Counter.jsx'

const Task = (data) => {
  // NOTE: do not delete `data-cy` key value pair
  //console.log(data)
  return (
    <>
      {data.data.data.map((task) => {
        return (
          <li key={task.id}>
            {task.text} - {task.count}{" "}
            <input type="checkbox" data-cy="task-checkbox" />
            <div data-cy="task-text"></div>
            <button data-cy="task-remove-button">Remove Task</button>
            <Counter value={task.count} />
          </li>
        );
      })}
    </>
  );
};

export default Task;

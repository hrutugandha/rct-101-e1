import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  // NOTE: do not delete `data-cy` key value pair
  let count =0;
  
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button">+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;

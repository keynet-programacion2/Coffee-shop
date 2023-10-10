import React, { useState } from "react";
import styles from "./counter.module.css";

function Counter() {
  const [count, setCount] = useState(1);

  const more = () => {
    setCount(count + 1);
  };

  const less = () => {
    setCount(count - 1);
  };

  return (

      <div className={styles.counter}>
        <button onClick={less}><img src="/assets/article/counter/less.svg"/></button>
        <p>{count}</p>
        <button onClick={more}><img src="/assets/article/counter/more.svg"/></button>
      </div>
  );
}

export default Counter;

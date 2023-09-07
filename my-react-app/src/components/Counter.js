// allows us to select a part of state managed by the store
import { useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  // param function will be executed by redux to get part of state
  // redux will automatically manage a subscription to the redux store for the current component("Counter")
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

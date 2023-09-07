const redux = require("redux");

// reducer will be executed by redux library, input is current store state, input is new store state
const counterReducer = (state = { counter: 0 }, action) => {
  console.log("reducer receive action:", action);

  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// when store is initialized, redux will execute counterReducer for the first time
const store = redux.createStore(counterReducer);

// get the initial state
console.log("initial state:", store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log("latest state:", latestState);
};

// executed by redux when store state changed because of dispatched action
store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "default" });

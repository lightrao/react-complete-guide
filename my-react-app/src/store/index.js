// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit"; // createReducer

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: function (state) {
      state.counter++;
    },
    decrement: function (state) {
      state.counter--;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const myReduxStore = createStore(counterSlice.reducer);
const myReduxStore = configureStore({
  reducer: counterSlice.reducer,
});

export default myReduxStore;

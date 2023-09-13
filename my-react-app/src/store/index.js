// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit"; // createReducer

import counterSliceReducer from "./counter-slice";
import authSliceReducer from "./auth-slice";

// const myReduxStore = createStore(counterSlice.reducer);
const myReduxStore = configureStore({
  reducer: {
    counterSliceReducer,
    authSliceReducer,
  },
});

export default myReduxStore;

// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit"; // createReducer

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// const myReduxStore = createStore(counterSlice.reducer);
const myReduxStore = configureStore({
  reducer: {
    counterSliceReducer: counterSlice.reducer,
    authSliceReducer: authSlice.reducer,
  },
});

// action creators
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default myReduxStore;

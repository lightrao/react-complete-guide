import { configureStore } from "@reduxjs/toolkit";

import uiSliceReducer from "./ui-slice";

const myReduxStore = configureStore({
  reducer: { uiSliceReducer },
});

export default myReduxStore;

import { configureStore } from "@reduxjs/toolkit";

import uiSliceReducer from "./ui-slice";
import cartSliceReducer from "./cart-slice";

const myReduxStore = configureStore({
  reducer: { uiSliceReducer, cartSliceReducer },
});

export default myReduxStore;

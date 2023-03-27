import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// // import { composeWithDevTools } from "redux-devtools-extension";
// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
import customerReducer from "../features/counter/counterSlice";
export const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
});

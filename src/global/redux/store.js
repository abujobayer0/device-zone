// store.js
import { createStore, combineReducers } from "redux";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  product: productReducer,
});

const store = createStore(rootReducer);

export default store;

import { combineReducers, createStore } from "redux";
import formReducer from "./formReducer";

const joinReducers = combineReducers({
  form: formReducer,
});

export const store = createStore(
  joinReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

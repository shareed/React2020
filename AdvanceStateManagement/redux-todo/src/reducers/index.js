import { combineReducers } from "redux";
import { titleReducer } from "./titleReducer";
import { reedReducer } from "./reedReducer";

export const rootReducer = combineReducers({
  titleReducer,
  reedReducer
});

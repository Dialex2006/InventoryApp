/*
 * Combines all the existing reducers
 */

import { combineReducers } from "redux";
import { loadingReducer } from "./loadingReducer";
import { loginReducer } from "./loginReducer";

export const appReducer = combineReducers({
  loginReducer: loginReducer,
  loadingReducer: loadingReducer,
});

/* Combines all the existing reducers */

import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { inventoryReducer } from "./inventoryReducer";
import { loadingReducer } from "./loadingReducer";

export const appReducer = combineReducers({
  authReducer: authReducer,
  inventoryReducer: inventoryReducer,
  loadingReducer: loadingReducer,
});

/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import { ILoadingState } from "../../models/reducers/loading";

const initialState: ILoadingState = {
  isLoginLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state: ILoadingState) {
    return { ...state, isLoginLoading: true };
  },
  [types.LOGIN_DISABLE_LOADER](state: ILoadingState) {
    return { ...state, isLoginLoading: false };
  },
});

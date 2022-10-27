/**
 * Loading reducer created separately for easy blacklisting
 * Avoid data persist
 */
import { ILoadingState } from "../../models/reducers/loading";

import createReducer from "../../lib/createReducer";

import * as types from "../actions/types";

const initialState: ILoadingState = {
  isLoginLoading: false,
  isInventoryLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state: ILoadingState) {
    return { ...state, isLoginLoading: true };
  },
  [types.LOGIN_DISABLE_LOADER](state: ILoadingState) {
    return { ...state, isLoginLoading: false };
  },
  [types.INVENTORY_ENABLE_LOADER](state: ILoadingState) {
    return { ...state, isInventoryLoading: true };
  },
  [types.INVENTORY_DISABLE_LOADER](state: ILoadingState) {
    return { ...state, isInventoryLoading: false };
  },
});

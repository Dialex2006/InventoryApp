/* Login Reducer
 * handles login states in the app
 */
import createReducer from "../../app/createReducer";
import * as types from "../actions/types";

import { ILoginState } from "../../models/reducers/login";
import {
  ILoginRequestState,
  ILoginResponseState,
} from "../../models/actions/login";

const initialState: ILoginState = {
  isLoggedIn: false,
  username: "",
  jwt: "",
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state: ILoginState, action: ILoginRequestState) {
    return {
      ...state,
      username: action.username,
      password: action.password,
    };
  },
  [types.LOGIN_LOADING_ENDED](state: ILoginState) {
    return { ...state };
  },
  [types.LOGIN_RESPONSE](state: ILoginState, action: ILoginResponseState) {
    return {
      ...state,
      status: action.response.status,
      jwt: action.response.data.jwt,
      username: action.username,
      isLoggedIn: true,
    };
  },
  [types.LOGIN_FAILED](state: ILoginState) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
  [types.LOG_OUT](state: ILoginState) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
});

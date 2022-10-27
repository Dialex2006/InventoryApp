/* Authentication Reducer handles login and register states in the app */

import { IAuthState } from "../../models/reducers/auth";
import {
  ILoginRequestState,
  ILoginResponseState,
} from "../../models/actions/auth";

import createReducer from "../../lib/createReducer";

import * as types from "../actions/types";

const initialState: IAuthState = {
  isLoggedIn: false,
  isJustRegistered: false,
  username: "",
};

export const authReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state: IAuthState, action: ILoginRequestState) {
    return {
      ...state,
      username: action.username,
      password: action.password,
    };
  },
  [types.LOGIN_RESPONSE](state: IAuthState, action: ILoginResponseState) {
    return {
      ...state,
      // TODO: make sense of this
      //   username: Object.values(action.response).,
      isLoggedIn: true,
    };
  },
  [types.LOGIN_FAILED](state: IAuthState) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
  [types.LOG_OUT](state: IAuthState) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },

  [types.REGISTRATION_REQUEST](state: IAuthState) {
    return {
      ...state,
    };
  },
  [types.REGISTRATION_RESPONSE](state: IAuthState) {
    return {
      ...state,
      isJustRegistered: true,
    };
  },
  [types.REGISTRATION_FAILED](state: IAuthState) {
    return {
      ...state,
      isJustRegistered: false,
    };
  },
});

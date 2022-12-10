/* Authentication Reducer handles login and register states in the app */

import { IAuthState } from "../../models/reducers/auth";
import {
  ILoginRequestState,
  ILoginResponseState,
  ISBAddUserRequestState,
  ISBAllUsersResponseState,
  ISBUserGenericResponseState,
  ISBUserRequestState,
  ISBUserResponseState,
} from "../../models/actions/auth";

import createReducer from "../../lib/createReducer";

import * as types from "../actions/types";

const initialState: IAuthState = {
  isLoggedIn: false,
  loginFailed: false,
  registrationFailed: false,
  isJustRegistered: false,
  username: "",
  //
  // Spring Boot entries
  allUsers: [],
  namedUser: undefined,
  isUserAdded: false,
  userToAdd: "",
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
      loginFailed: false,
    };
  },
  [types.LOGIN_FAILED](state: IAuthState) {
    return {
      ...state,
      isLoggedIn: false,
      loginFailed: true,
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
      registrationFailed: false,
    };
  },
  [types.REGISTRATION_FAILED](state: IAuthState) {
    return {
      ...state,
      isJustRegistered: false,
      registrationFailed: true,
    };
  },
  [types.CLEAR_REGISTRATION_FLAG](state: IAuthState) {
    return {
      ...state,
      isJustRegistered: false,
    };
  },
  //
  // Spring Boot reducers
  [types.ALL_USERS_REQUEST](state: IAuthState) {
    return { ...state };
  },
  [types.ALL_USERS_RESPONSE](
    state: IAuthState,
    action: ISBAllUsersResponseState
  ) {
    return { ...state, allUsers: action.response.data.users };
  },
  [types.USER_REQUEST](state: IAuthState, action: ISBUserRequestState) {
    return { ...state, username: action.username };
  },
  [types.USER_RESPONSE](state: IAuthState, action: ISBUserResponseState) {
    return { ...state, namedUser: action.response.data.user };
  },
  [types.ADD_USER_REQUEST](state: IAuthState, action: ISBAddUserRequestState) {
    return { ...state, userToAdd: action.username };
  },
  [types.ADD_USER_RESPONSE](
    state: IAuthState,
    action: ISBUserGenericResponseState
  ) {
    return {
      ...state,
      isUserAdded: action.status === "ok",
    };
  },
});

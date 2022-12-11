/* Reducer actions related to authentication */

import {
  ILoginResponse,
  ISBAllUsersResponse,
  ISBUserGenericResponse,
  ISBUserResponse,
} from "../../models/api/auth";

import * as types from "./types";

/**
 * @brief Triggers register saga. `Register` endpoint.
 *
 * @param username Username.
 * @param password Plain text password.
 */
export function requestRegistration(username: string, password: string) {
  return {
    type: types.REGISTRATION_REQUEST,
    username,
    password,
  };
}

export function registrationFailed() {
  return {
    type: types.REGISTRATION_FAILED,
  };
}

/**
 * @brief Saves response from `Register` endpoint call.
 */
export function onRegisterResponse() {
  return {
    type: types.REGISTRATION_RESPONSE,
  };
}

/**
 * @brief Triggers login saga. `Login` endpoint.
 *
 * @param username Username.
 * @param password Plain text password.
 */
export function requestLogin(username: string, password: string) {
  return {
    type: types.LOGIN_REQUEST,
    username,
    password,
  };
}

export function loginFailed() {
  return {
    type: types.LOGIN_FAILED,
  };
}

/**
 * @brief Saves response from `Login` endpoint call.
 *
 * @param response Login response.
 * @param username Username of the logged in user.
 */
export function onLoginResponse(response: ILoginResponse, username: string) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
    username,
  };
}

//
// Spring Boot actions

export function queryAllUsers() {
  return {
    type: types.ALL_USERS_REQUEST,
  };
}

export function onAllUsersResponse(response: ISBAllUsersResponse) {
  return {
    type: types.ALL_USERS_RESPONSE,
    response,
  };
}

export function queryUserByName(username: string) {
  return {
    type: types.USER_REQUEST,
    username,
  };
}

export function onUserByNameResponse(response: ISBUserResponse) {
  return {
    type: types.USER_RESPONSE,
    response,
  };
}

export function requestAddUser(username: string) {
  console.log(`action username: ${username}`);
  return {
    type: types.ADD_USER_REQUEST,
    username,
  };
}

export function onAddUserResponse(response: ISBUserGenericResponse) {
  return {
    type: types.ADD_USER_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}

export function clearRegistrationFlag() {
  return {
    type: types.CLEAR_REGISTRATION_FLAG,
  };
}

/* Reducer actions related to authentication */

import { ILoginResponse } from "../../models/api/auth";

import * as types from "./types";

/**
 * @brief Triggers register saga. `Register` endpoint.
 *
 * @param username Username.
 * @param password Plain text password.
 */
export function requestRegistration(username: string, password: string) {
  return {
    type: types.LOGIN_REQUEST,
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

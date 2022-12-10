/*
 * Redux saga class cluster.
 * 1. Redux saga logins user into the app. Requires username and password.
 * 2. Redux saga registers user in the system. Requires username and password.
 */

import { put, call } from "redux-saga/effects";
import {
  addUserByName,
  getAllUsers,
  getUserByName,
  loginUser,
  registerUser,
} from "../../services/userAuth";
import {
  ILoginRequestState,
  IRegisterRequestState,
  ISBAddUserRequestState,
  ISBAllUsersRequestState,
  ISBUserRequestState,
} from "../../models/actions/auth";
import {
  ILoginResponse,
  IRegisterResponse,
  ISBAllUsersResponse,
  ISBUserGenericResponse,
  ISBUserResponse,
} from "../../models/api/auth";
import { AxiosResponse } from "axios";

import * as authActions from "../actions/authActions";

// Worker saga that logins a user
export function* loginAsync(action: ILoginRequestState) {
  yield put(authActions.enableLoader());
  const response: AxiosResponse<ILoginResponse> = yield call(loginUser);

  if (response === undefined) {
    yield put(authActions.loginFailed());
    setTimeout(() => {
      alert(`Login failed: the response is null`);
    }, 200);
    return;
  } else {
    if (
      Object.values(response.data).some((it) => {
        return (
          it.username === action.username && it.password === action.password
        );
      })
    ) {
      yield put(authActions.onLoginResponse(response.data, action.username));
    } else {
      yield put(authActions.loginFailed());
      setTimeout(() => {
        alert(`Login failed: incorrect login or password`);
      }, 200);
    }
  }
  yield put(authActions.disableLoader());
}

// Worker saga that registers a new user
export function* registerAsync(action: IRegisterRequestState) {
  const response: AxiosResponse<IRegisterResponse> = yield call(
    registerUser,
    action.username,
    action.password
  );

  if (response === undefined) {
    yield put(authActions.registrationFailed());
    setTimeout(() => {
      alert(`Registration failed: the response is null`);
    }, 200);
    return;
  } else {
    yield put(authActions.onRegisterResponse());
  }
}

export function* getAllUsersAsync(action: ISBAllUsersRequestState) {
  yield put(authActions.enableLoader());
  const response: AxiosResponse<ISBAllUsersResponse> = yield call(getAllUsers);

  if (response === undefined) {
    setTimeout(() => {
      alert(`Query all users failed: the response is null`);
    }, 200);
  } else {
    yield put(authActions.onAllUsersResponse(response.data));
  }
  yield put(authActions.disableLoader());
}

export function* getUserByNameAsync(action: ISBUserRequestState) {
  yield put(authActions.enableLoader());
  const response: AxiosResponse<ISBUserResponse> = yield call(
    getUserByName,
    action.username
  );

  if (response === undefined) {
    setTimeout(() => {
      alert(`Query user by name failed: the response is null`);
    }, 200);
  } else {
    yield put(authActions.onUserByNameResponse(response.data));
  }
  yield put(authActions.disableLoader());
}

export function* addUserAsync(action: ISBAddUserRequestState) {
  yield put(authActions.enableLoader());
  const response: AxiosResponse<ISBUserGenericResponse> = yield call(
    addUserByName,
    action.username
  );

  if (response === undefined) {
    setTimeout(() => {
      alert(`Add user failed: the response is null`);
    }, 200);
  } else {
    yield put(authActions.onAddUserResponse(response.data));
  }
  yield put(authActions.disableLoader());
}

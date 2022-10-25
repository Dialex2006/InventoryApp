/*
 * Redux saga class logins user into the app. Requires username and password.
 */

import { put, call } from "redux-saga/effects";
import loginUser from "../../services/loginUser";
import * as loginActions from "../actions/loginActions";
import { ILoginRequestState } from "../../models/actions/login";
import { ILoginResponse } from "../../models/api/login";
import { AxiosResponse } from "axios";

// Our worker Saga that logins the user
export default function* loginAsync(action: ILoginRequestState) {
  yield put(loginActions.enableLoader());
  const response: AxiosResponse<ILoginResponse> = yield call(loginUser);

  console.log(`%#RESPONSE: ${JSON.stringify(response)}`);

  if (response === undefined) {
    return;
  } else {
    if (
      Object.values(response.data).some((it) => {
        console.log(`it: ${JSON.stringify(it)}`);
        return (
          it.username === action.username && it.password === action.password
        );
      })
    ) {
      yield put(loginActions.onLoginResponse(response.data, action.username));
    } else {
      yield put(loginActions.loginFailed());
      setTimeout(() => {
        alert(`Login failed: the response is null`);
      }, 200);
    }
  }
  yield put(loginActions.disableLoader());
}

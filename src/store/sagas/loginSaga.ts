/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
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
  const response: AxiosResponse<ILoginResponse> = yield call(
    loginUser,
    action.username,
    action.password
  );

  if (response === undefined) {
    return;
  } else if (response.data.status === "ok") {
    yield put(loginActions.onLoginResponse(response.data, action.username));
  } else {
    yield put(loginActions.loginFailed());
    setTimeout(() => {
      alert(`Login failed: ${response.data.error}`);
    }, 200);
  }
  yield put(loginActions.disableLoader());
}

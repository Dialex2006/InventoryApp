/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest } from "redux-saga/effects";
import { loginAsync, registerAsync } from "./authSaga";
import { addAssetAsync, inventoryAsync } from "./inventorySaga";

import * as types from "../actions/types";

export default function* watch() {
  yield all([
    takeEvery(types.LOGIN_REQUEST, loginAsync),
    takeLatest(types.REGISTRATION_REQUEST, registerAsync),
    takeEvery(types.INVENTORY_REQUEST, inventoryAsync),
    takeEvery(types.ADD_ASSET_REQUEST, addAssetAsync),
  ]);
}

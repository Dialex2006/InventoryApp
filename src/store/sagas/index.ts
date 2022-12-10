/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest } from "redux-saga/effects";
import {
  addUserAsync,
  getAllUsersAsync,
  getUserByNameAsync,
  loginAsync,
  registerAsync,
} from "./authSaga";
import {
  addAssetAsync,
  inventoryAsync,
  sbAssetAddAsync,
  sbAssetAssignToUserAsync,
  sbAssetByNameAsync,
  sbAssetByNumberAsync,
  sbInventoryAsync,
} from "./inventorySaga";

import * as types from "../actions/types";

export default function* watch() {
  yield all([
    takeEvery(types.LOGIN_REQUEST, loginAsync),
    takeLatest(types.REGISTRATION_REQUEST, registerAsync),
    takeEvery(types.ALL_USERS_REQUEST, getAllUsersAsync),
    takeEvery(types.USER_REQUEST, getUserByNameAsync),
    takeEvery(types.ADD_USER_REQUEST, addUserAsync),
    takeEvery(types.INVENTORY_REQUEST, inventoryAsync),
    takeEvery(types.ADD_ASSET_REQUEST, addAssetAsync),
    takeEvery(types.SB_INVENTORY_REQUEST, sbInventoryAsync),
    takeEvery(types.SB_NAME_ASSET_REQUEST, sbAssetByNameAsync),
    takeEvery(types.SB_NUMBER_ASSET_REQUEST, sbAssetByNumberAsync),
    takeEvery(types.SB_ADD_ASSET_REQUEST, sbAssetAddAsync),
    takeEvery(types.SB_ASSIGN_ASSET_TO_USER_REQUEST, sbAssetAssignToUserAsync),
  ]);
}

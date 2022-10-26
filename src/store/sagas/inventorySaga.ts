/*
 * Redux saga class cluster.
 * 1. Redux saga logins user into the app. Requires username and password.
 * 2. Redux saga registers user in the system. Requires username and password.
 */

import { put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import * as inventoryActions from "../actions/inventoryActions";
import { IAddAssetRequestState, IInventoryRequestState } from "../../models/actions/inventory";
import { IAddAssetResponse, IInventoryResponse } from "../../models/api/inventory";
import { addAsset, getInventory } from "../../services/inventory";

// Worker Saga that logins a user
export function* inventoryAsync(action: IInventoryRequestState) {
  yield put(inventoryActions.enableLoader());
  const response: AxiosResponse<IInventoryResponse> = yield call(getInventory);

  if (response === undefined) {
    setTimeout(() => {
      alert(`Inventory retrieve failed: the response is null`);
    }, 200);
    return;
  } else {
    if (
      Object.values(response.data).some((it) => {
        return it.category === action.category;
      })
    ) {
      yield put(
        inventoryActions.onInventoryResponse(response.data, action.category)
      );
    } else {
      setTimeout(() => {
        alert(`Login failed: incorrect login or password`);
      }, 200);
    }
  }
  yield put(inventoryActions.disableLoader());
}

// Worker saga that adds a new asset
export function* addAssetAsync(action: IAddAssetRequestState) {
  const response: AxiosResponse<IAddAssetResponse> = yield call(
    addAsset,
    action.,
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

/*
 * Redux saga class cluster.
 * 1. Redux saga logins user into the app. Requires username and password.
 * 2. Redux saga registers user in the system. Requires username and password.
 */

import { put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import * as inventoryActions from "../actions/inventoryActions";
import {
  IAddAssetRequestState,
  IInventoryRequestState,
  ISBInventoryAddAssetsRequestState,
  ISBInventoryAssignAssetRequestState,
  ISBInventoryNamedAssetsRequestState,
  ISBInventoryNumberAssetRequestState,
  ISBInventoryRequestState,
} from "../../models/actions/inventory";
import {
  IAddAssetResponse,
  IInventoryResponse,
  ISBInventoryAssetResponse,
  ISBInventoryGenericResponse,
  ISBInventoryResponse,
} from "../../models/api/inventory";
import {
  addAsset,
  addSBAsset,
  assignSBAssetToUser,
  getInventory,
  getSBAssetsByName,
  getSBAssetsByNumber,
  getSBInventory,
} from "../../services/inventory";

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
    yield put(inventoryActions.onInventoryResponse(response.data));
  }
  yield put(inventoryActions.disableLoader());
}

// Worker saga that adds a new asset
export function* addAssetAsync(action: IAddAssetRequestState) {
  const response: AxiosResponse<IAddAssetResponse> = yield call(
    addAsset,
    action.asset
  );

  if (response === undefined) {
    yield put(inventoryActions.addAssetFailed());
    setTimeout(() => {
      alert(`Add asset failed: the response is null`);
    }, 200);
    return;
  } else {
    yield put(inventoryActions.onAddAssetResponse());
  }
}

export function* sbInventoryAsync(action: ISBInventoryRequestState) {
  yield put(inventoryActions.enableLoader());
  const response: AxiosResponse<ISBInventoryResponse> = yield call(
    getSBInventory
  );

  if (response === undefined) {
    setTimeout(() => {
      alert(`Inventory retrieve failed: the response is null`);
    }, 200);
    return;
  } else {
    yield put(inventoryActions.onSBInventoryResponse(response.data));
  }
  yield put(inventoryActions.disableLoader());
}

export function* sbAssetByNameAsync(
  action: ISBInventoryNamedAssetsRequestState
) {
  yield put(inventoryActions.enableLoader());
  const response: AxiosResponse<ISBInventoryResponse> = yield call(
    getSBAssetsByName,
    action.assetName
  );

  if (response === undefined) {
    setTimeout(() => {
      alert(`Get asset by name failed: the response is null`);
    }, 200);
    return;
  } else {
    yield put(inventoryActions.onSBAssetByNameResponse(response.data));
  }
  yield put(inventoryActions.disableLoader());
}

export function* sbAssetByNumberAsync(
  action: ISBInventoryNumberAssetRequestState
) {
  yield put(inventoryActions.enableLoader());
  const response: AxiosResponse<ISBInventoryAssetResponse> = yield call(
    getSBAssetsByNumber,
    action.serialNumber
  );

  if (response === undefined) {
    setTimeout(() => {
      alert(`Get asset by serial number failed: the response is null`);
    }, 200);
    return;
  } else {
    yield put(inventoryActions.onSBAssetByNumberResponse(response.data));
  }
  yield put(inventoryActions.disableLoader());
}

export function* sbAssetAddAsync(action: ISBInventoryAddAssetsRequestState) {
  yield put(inventoryActions.enableLoader());
  const response: AxiosResponse<ISBInventoryGenericResponse> = yield call(
    addSBAsset,
    action.asset
  );

  if (response === undefined) {
    setTimeout(() => {
      alert(`Add sb asset failed: the response is null`);
    }, 200);
    return;
  } else {
    yield put(inventoryActions.onAddSBAssetResponse(response.data));
  }
  yield put(inventoryActions.disableLoader());
}

export function* sbAssetAssignToUserAsync(
  action: ISBInventoryAssignAssetRequestState
) {
  yield put(inventoryActions.enableLoader());
  const response: AxiosResponse<ISBInventoryGenericResponse> = yield call(
    assignSBAssetToUser,
    action.username,
    action.itemId
  );

  if (response === undefined) {
    setTimeout(() => {
      alert(`Assign sb asset failed: the response is null`);
    }, 200);
    return;
  } else {
    yield put(inventoryActions.onAssignSBAssetToUserResponse(response.data));
  }
  yield put(inventoryActions.disableLoader());
}

/* Reducer actions related to inventory */

import { ISBInventoryResponseState } from "../../models/actions/inventory";
import {
  IInventoryAsset,
  IInventoryResponse,
  ISBInventoryAssetItemToAdd,
  ISBInventoryAssetResponse,
  ISBInventoryGenericResponse,
} from "../../models/api/inventory";

import * as types from "./types";

/**
 * @brief Triggers inventory saga. `Inventory` endpoint.
 *
 * @param category Category of assets to look for.
 */
export function requestInventory() {
  return {
    type: types.INVENTORY_REQUEST,
  };
}

/**
 * @brief Saves response from `Inventory` endpoint call.
 *
 * @param response Inventory response.
 * @param category Items category to filter by.
 */
export function onInventoryResponse(response: IInventoryResponse) {
  return {
    type: types.INVENTORY_RESPONSE,
    response,
  };
}

/**
 * @brief Triggers addAsset saga. `AddAsset` endpoint.
 *
 * @param asset Asset to add.
 */
export function requestAddAsset(asset: IInventoryAsset) {
  return {
    type: types.ADD_ASSET_REQUEST,
    asset,
  };
}

/**
 * @brief Saves response from `Inventory` endpoint call.
 */
export function onAddAssetResponse() {
  return {
    type: types.ADD_ASSET_RESPONSE,
  };
}

export function addAssetFailed() {
  return {
    type: types.ADD_ASSET_FAILED,
  };
}

export function enableLoader() {
  return {
    type: types.INVENTORY_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.INVENTORY_DISABLE_LOADER,
  };
}

/**
 * @brief Clears local inventory store.
 */
export function clearInventory() {
  return {
    type: types.CLEAR_INVENTORY,
  };
}

//
// Spring Boot actions
export function requestSBInventory() {
  return {
    type: types.SB_INVENTORY_REQUEST,
  };
}

export function onSBInventoryResponse(response: ISBInventoryResponseState) {
  return {
    type: types.SB_INVENTORY_RESPONSE,
    response,
  };
}

export function requestSBAssetByName(assetName: string) {
  return {
    type: types.SB_NAME_ASSET_REQUEST,
    assetName,
  };
}

export function onSBAssetByNameResponse(response: ISBInventoryAssetResponse) {
  return {
    type: types.SB_NAME_ASSET_RESPONSE,
    response,
  };
}

export function requestSBAssetByNumber(assetName: string) {
  return {
    type: types.SB_NUMBER_ASSET_REQUEST,
    assetName,
  };
}

export function onSBAssetByNumberResponse(response: ISBInventoryAssetResponse) {
  return {
    type: types.SB_NUMBER_ASSET_RESPONSE,
    response,
  };
}

export function requestAddSBAsset(asset: ISBInventoryAssetItemToAdd) {
  return {
    type: types.SB_ADD_ASSET_REQUEST,
    asset,
  };
}

export function onAddSBAssetResponse(response: ISBInventoryGenericResponse) {
  return {
    type: types.SB_ADD_ASSET_RESPONSE,
    response,
  };
}

export function requestAssignSBAssetToUser(username: string, itemId: number) {
  return {
    type: types.SB_ASSIGN_ASSET_TO_USER_REQUEST,
    username,
    itemId,
  };
}

export function onAssignSBAssetToUserResponse(
  response: ISBInventoryGenericResponse
) {
  return {
    type: types.SB_ASSIGN_ASSET_TO_USER_RESPONSE,
    response,
  };
}

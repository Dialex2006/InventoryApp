/* Reducer actions related to inventory */

import {
  IInventoryAsset,
  IInventoryResponse,
} from "../../models/api/inventory";

import * as types from "./types";

/**
 * @brief Triggers inventory saga. `Inventory` endpoint.
 *
 * @param category Category of assets to look for.
 */
export function requestInventory(category: string) {
  return {
    type: types.INVENTORY_REQUEST,
    category,
  };
}

/**
 * @brief Saves response from `Inventory` endpoint call.
 *
 * @param response Inventory response.
 * @param category Items category to filter by.
 */
export function onInventoryResponse(
  response: IInventoryResponse,
  filterCategory: string
) {
  return {
    type: types.INVENTORY_RESPONSE,
    response,
    filterCategory,
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

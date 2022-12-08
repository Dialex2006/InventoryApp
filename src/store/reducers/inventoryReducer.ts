/* Inventory Reducer, handles login states in the app */

import {
  IInventoryRequestState,
  IInventoryResponseState,
  ISBInventoryAssetResponseState,
  ISBInventoryAssignAssetRequestState,
  ISBInventoryGenericResponseState,
  ISBInventoryResponseState,
} from "../../models/actions/inventory";
import { IInventoryState } from "../../models/reducers/inventory";

import createReducer from "../../lib/createReducer";

import * as types from "../actions/types";

const initialState: IInventoryState = {
  inventoryItems: [],
  isAssetAdded: false,
  //
  // Spring Boot entries
  sbAssets: [],
  selectedAssets: [],
  isSBAssetAdded: false,
  isSBAssetAssigned: false,
  usernameToAssignAsset: "",
  assetIdToAssign: 0,
};

export const inventoryReducer = createReducer(initialState, {
  [types.INVENTORY_REQUEST](
    state: IInventoryState,
    action: IInventoryRequestState
  ) {
    return {
      ...state,
      category: action.category,
    };
  },
  [types.INVENTORY_RESPONSE](
    state: IInventoryState,
    action: IInventoryResponseState
  ) {
    return {
      ...state,
      inventoryItems: Object.values(action.response),
    };
  },
  [types.CLEAR_INVENTORY](state: IInventoryState) {
    return {
      ...state,
      inventoryItems: [],
      sbAssets: [],
      selectedAssets: [],
    };
  },

  [types.ADD_ASSET_REQUEST](state: IInventoryState) {
    return {
      ...state,
    };
  },
  [types.ADD_ASSET_RESPONSE](state: IInventoryState) {
    return {
      ...state,
      isAssetAdded: true,
    };
  },
  [types.ADD_ASSET_FAILED](state: IInventoryState) {
    return {
      ...state,
      isAssetAdded: false,
    };
  },
  //
  // Spring Boot reducers
  [types.SB_INVENTORY_REQUEST](state: IInventoryState) {
    return {
      ...state,
    };
  },
  [types.SB_INVENTORY_RESPONSE](
    state: IInventoryState,
    action: ISBInventoryResponseState
  ) {
    return {
      ...state,
      sbAssets: action.response.data.assets,
    };
  },
  [types.SB_NAME_ASSET_REQUEST](state: IInventoryState) {
    return {
      ...state,
    };
  },
  [types.SB_NAME_ASSET_RESPONSE](
    state: IInventoryState,
    action: ISBInventoryResponseState
  ) {
    return {
      ...state,
      selectedAssets: action.response.data.assets,
    };
  },
  [types.SB_NUMBER_ASSET_REQUEST](state: IInventoryState) {
    return {
      ...state,
    };
  },
  [types.SB_NUMBER_ASSET_RESPONSE](
    state: IInventoryState,
    action: ISBInventoryAssetResponseState
  ) {
    return {
      ...state,
      selectedAssets: [action.response.data.assetItem],
    };
  },
  [types.SB_ADD_ASSET_REQUEST](state: IInventoryState) {
    return {
      ...state,
    };
  },
  [types.SB_ADD_ASSET_RESPONSE](
    state: IInventoryState,
    action: ISBInventoryGenericResponseState
  ) {
    return {
      ...state,
      isSBAssetAdded: action.status === "ok",
    };
  },
  [types.SB_ASSIGN_ASSET_TO_USER_REQUEST](
    state: IInventoryState,
    action: ISBInventoryAssignAssetRequestState
  ) {
    return {
      ...state,
      usernameToAssignAsset: action.username,
      assetIdToAssign: action.itemId,
    };
  },
  [types.SB_ASSIGN_ASSET_TO_USER_RESPONSE](
    state: IInventoryState,
    action: ISBInventoryGenericResponseState
  ) {
    return {
      ...state,
      isSBAssetAssigned: action.status === "ok",
    };
  },
});

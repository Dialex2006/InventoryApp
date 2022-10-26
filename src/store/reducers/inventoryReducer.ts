/* Inventory Reducer, handles login states in the app */
import createReducer from "../../lib/createReducer";
import {
  IInventoryRequestState,
  IInventoryResponseState,
} from "../../models/actions/inventory";
import { IInventoryState } from "../../models/reducers/inventory";

import * as types from "../actions/types";

const initialState: IInventoryState = {
  inventoryItems: [],
  isAssetAdded: false,
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
      inventoryItems: Object.values(action.response).map(
        (it) => it.category == action.filterCategory
      ),
    };
  },
  [types.CLEAR_INVENTORY](state: IInventoryState) {
    return {
      ...state,
      inventoryItems: [],
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
});

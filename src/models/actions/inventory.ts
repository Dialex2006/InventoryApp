import {
  IAddAssetResponse,
  IInventoryAsset,
  IInventoryResponse,
} from "../api/inventory";

export interface IInventoryRequestState {
  type: string;
  category: string;
}

export interface IInventoryResponseState {
  type: string;
  response: IInventoryResponse;
}

export interface IAddAssetRequestState {
  type: string;
  asset: IInventoryAsset;
}

export interface IAddAssetResponseState {
  type: string;
  response: IAddAssetResponse;
}

import {
  IAddAssetResponse,
  IInventoryAsset,
  IInventoryResponse,
  ISBInventoryAssetResponse,
  ISBInventoryGenericResponse,
  ISBInventoryResponse,
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

//
// Spring Boot interfaces

export interface ISBInventoryRequestState {
  type: string;
}

export interface ISBInventoryNamedAssetsRequestState {
  type: string;
  name: string;
}

export interface ISBInventoryNumberAssetRequestState {
  type: string;
  serialNumber: string;
}

export interface ISBInventoryAddAssetsRequestState {
  type: string;
  assetName: string;
  serialNumber: string;
  supplier: string;
}

export interface ISBInventoryAssignAssetRequestState {
  type: string;
  username: string;
}

export interface ISBInventoryResponseState {
  type: string;
  response: ISBInventoryResponse;
}

export interface ISBInventoryAssetResponseState {
  type: string;
  response: ISBInventoryAssetResponse;
}

export interface ISBInventoryGenericResponseState
  extends ISBInventoryGenericResponse {
  type: string;
}

import { apiClient } from "./client";
import { AxiosResponse } from "axios";
import {
  IAddAssetResponse,
  IInventoryAsset,
  IInventoryResponse,
  ISBInventoryAssetItemToAdd,
  ISBInventoryAssetResponse,
  ISBInventoryGenericResponse,
  ISBInventoryResponse,
} from "../models/api/inventory";

import ApiConfig from "../config/api-config";

export function getInventory(): Promise<AxiosResponse<IInventoryResponse>> {
  return apiClient.get(ApiConfig.INVENTORY);
}

export function addAsset(
  asset: IInventoryAsset
): Promise<AxiosResponse<IAddAssetResponse>> {
  return apiClient.post(ApiConfig.ADD_ASSET, { ...asset });
}

//
// Spring Boot service functions

export function getSBInventory(): Promise<AxiosResponse<ISBInventoryResponse>> {
  return apiClient.get(ApiConfig.ALL_SB_ASSETS);
}

export function querySBAssetsByName(
  assetName: string
): Promise<AxiosResponse<ISBInventoryResponse>> {
  return apiClient.get(ApiConfig.SB_ASSET_BY_NAME(assetName));
}

export function querySBAssetsByNumber(
  assetSerialNumber: string
): Promise<AxiosResponse<ISBInventoryAssetResponse>> {
  return apiClient.get(ApiConfig.SB_ASSET_BY_NUMBER(assetSerialNumber));
}

export function addSBAsset(
  asset: ISBInventoryAssetItemToAdd
): Promise<AxiosResponse<ISBInventoryGenericResponse>> {
  return apiClient.post(ApiConfig.ADD_SB_ASSET, { ...asset });
}

export function assignSBAssetToUser(
  username: string,
  assetId: number
): Promise<AxiosResponse<ISBInventoryGenericResponse>> {
  return apiClient.post(ApiConfig.ASSIGN_SB_ASSETS, {
    userName: username,
    id: assetId,
  });
}

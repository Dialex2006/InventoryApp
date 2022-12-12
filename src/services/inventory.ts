import { apiClient, sbApiClient } from "./client";
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
  return sbApiClient.get(ApiConfig.ALL_SB_ASSETS);
}

export function getSBAssetsByName(
  assetName: string
): Promise<AxiosResponse<ISBInventoryResponse>> {
  return sbApiClient.get(ApiConfig.SB_ASSET_BY_NAME(assetName));
}

export function getSBAssetsByNumber(
  assetSerialNumber: string
): Promise<AxiosResponse<ISBInventoryAssetResponse>> {
  return sbApiClient.get(ApiConfig.SB_ASSET_BY_NUMBER(assetSerialNumber));
}

export function addSBAsset(
  asset: ISBInventoryAssetItemToAdd
): Promise<AxiosResponse<ISBInventoryGenericResponse>> {
  return sbApiClient.post(ApiConfig.ADD_SB_ASSET, { asset });
}

export function assignSBAssetToUser(
  username: string,
  assetId: number
): Promise<AxiosResponse<ISBInventoryGenericResponse>> {
  return sbApiClient.post(ApiConfig.ASSIGN_SB_ASSETS, {
    username: username,
    id: assetId,
  });
}

export function deleteSBAssetById(
  assetId: number
): Promise<AxiosResponse<ISBInventoryGenericResponse>> {
  return sbApiClient.post(ApiConfig.DELETE_ASSET_BY_ID(assetId));
}

export function deleteSBAssetBySerialNumber(
  serialNumber: string
): Promise<AxiosResponse<ISBInventoryGenericResponse>> {
  return sbApiClient.post(ApiConfig.DELETE_ASSET_BY_NUMBER(serialNumber));
}

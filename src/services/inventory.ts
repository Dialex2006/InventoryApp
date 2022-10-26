import { apiClient } from "./client";
import { AxiosResponse } from "axios";

import ApiConfig from "../config/api-config";
import {
  IAddAssetResponse,
  IInventoryAsset,
  IInventoryResponse,
} from "../models/api/inventory";

export function getInventory(): Promise<AxiosResponse<IInventoryResponse>> {
  return apiClient.get(ApiConfig.INVENTORY);
}

export function addAsset(
  asset: IInventoryAsset
): Promise<AxiosResponse<IAddAssetResponse>> {
  return apiClient.post(ApiConfig.ADD_ASSET, { asset });
}

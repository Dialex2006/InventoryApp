import { IInventoryAsset } from "../api/inventory";

export interface IInventoryState {
  inventoryItems: IInventoryAsset[];
  isAssetAdded: boolean;
}

import { IInventoryAsset, ISBInventoryAssetItem } from "../api/inventory";

export interface IInventoryState {
  inventoryItems: IInventoryAsset[];
  isAssetAdded: boolean;
  //
  // Spring Boot entries
  sbAssets: ISBInventoryAssetItem[];
  selectedAssets: ISBInventoryAssetItem[];
  isSBAssetAdded: boolean;
  isSBAssetAssigned: boolean;
  usernameToAssignAsset: string;
  assetIdToAssign: number;
}

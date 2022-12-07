export interface IInventoryAsset {
  category: string;
  date: string;
  location: string;
  name: string;
  serial: string;
  user: string;
  status: string;
}

export interface IInventoryResponse {
  [firebaseID: string]: IInventoryAsset;
}

// Ignore firebase id in this interface
export interface IAddAssetResponse {
  error?: string;
}

//
// Spring Boot interfaces

export interface ISBInventoryAssetItem {
  id: number;
  unitId: number;
  itemName: string;
  serialNumber: string;
  purchaseDate: string;
  supplier: string;
  ownerId: number;
  new: boolean;
}

export interface ISBInventoryResponse extends ISBInventoryGenericResponse {
  data: { assets: ISBInventoryAssetItem[] };
}

export interface ISBInventoryAssetResponse extends ISBInventoryGenericResponse {
  data: { assetItem: ISBInventoryAssetItem };
}

export interface ISBInventoryGenericResponse {
  error: string;
  status: "ok" | "error";
}

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

import { ISBInventoryAssetItem } from "./inventory";

export interface IUserCredentials {
  username: string;
  password: string;
}

export interface ILoginResponse {
  [firebaseID: string]: IUserCredentials;
}

// Ignore firebase id in this interface
export interface IRegisterResponse {
  error?: string;
}

//
// Spring Boot interfaces

export interface ISBUser {
  id: number;
  userId: number;
  name: string;
  status: string;
  location: string;
  email: string;
  startDate: string;
  assetsList: ISBInventoryAssetItem[];
  new: boolean;
}

export interface ISBAllUsersResponse extends ISBUserGenericResponse {
  data: { users: ISBUser[] };
}

export interface ISBUserResponse extends ISBUserGenericResponse {
  data: { user: ISBUser };
}

export interface ISBUserGenericResponse {
  error: string;
  status: "ok" | "error";
}

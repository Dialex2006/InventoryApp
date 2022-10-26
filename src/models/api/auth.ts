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

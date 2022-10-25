export interface ILoginResponse {
  [firebaseID: string]: {
    username: string;
    password: string;
  };
}

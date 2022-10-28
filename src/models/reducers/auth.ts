export interface IAuthState {
  isLoggedIn: boolean;
  loginFailed: boolean;
  registrationFailed: boolean;
  isJustRegistered: boolean;
  username: string;
}

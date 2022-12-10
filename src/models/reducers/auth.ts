import { ISBUser } from "../api/auth";

export interface IAuthState {
  isLoggedIn: boolean;
  loginFailed: boolean;
  registrationFailed: boolean;
  isJustRegistered: boolean;
  username: string;
  //
  // Spring Boot entries
  allUsers: ISBUser[];
  namedUser?: ISBUser;
  isUserAdded: boolean;
  userToAdd: string;
}

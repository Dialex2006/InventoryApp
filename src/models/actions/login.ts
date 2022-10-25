// We are sorry, this authentication sucks...

import { ILoginResponse } from "../api/login";

export interface ILoginRequestState {
  type: string;
  username: string;
  password: string;
}

export interface ILoginResponseState {
  type: string;
  response: ILoginResponse;
}

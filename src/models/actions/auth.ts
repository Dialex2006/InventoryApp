// We are sorry, this authentication sucks...

import { ILoginResponse, IRegisterResponse } from "../api/auth";

export interface ILoginRequestState {
  type: string;
  username: string;
  password: string;
}

export interface ILoginResponseState {
  type: string;
  response: ILoginResponse;
}

export interface IRegisterRequestState {
  type: string;
  username: string;
  password: string;
}

export interface IRegisterResponseState {
  type: string;
  response: IRegisterResponse;
}

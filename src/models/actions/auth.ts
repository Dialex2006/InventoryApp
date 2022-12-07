// We are sorry, this authentication sucks...

import {
  ILoginResponse,
  IRegisterResponse,
  ISBAllUsersResponse,
  ISBUserGenericResponse,
  ISBUserResponse,
} from "../api/auth";

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

//
// Spring Boot interfaces

export interface ISBAllUsersRequestState {
  type: string;
}

export interface ISBUserRequestState {
  type: string;
  name: string;
}

export interface ISBAddUserRequestState {
  type: string;
  name: string;
}

export interface ISBAllUsersResponseState {
  type: string;
  response: ISBAllUsersResponse;
}

export interface ISBUserResponseState {
  type: string;
  response: ISBUserResponse;
}

export interface ISBUserGenericResponseState extends ISBUserGenericResponse {
  type: string;
}

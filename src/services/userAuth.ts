import { apiClient } from "./client";
import { sbApiClient } from "./client";
import { AxiosResponse } from "axios";
import {
  ILoginResponse,
  IRegisterResponse,
  ISBAllUsersResponse,
  ISBUserGenericResponse,
  ISBUserResponse,
} from "../models/api/auth";

import ApiConfig from "../config/api-config";

export function loginUser(): Promise<AxiosResponse<ILoginResponse>> {
  return apiClient.get(ApiConfig.LOGIN);
}

export function registerUser(
  username: string,
  password: string
): Promise<AxiosResponse<IRegisterResponse>> {
  return apiClient.post(ApiConfig.REGISTER, { username, password });
}

//
// Spring Boot service functions

export function getAllUsers(): Promise<AxiosResponse<ISBAllUsersResponse>> {
  return sbApiClient.get(ApiConfig.ALL_USERS);
}

export function getUserByName(
  username: string
): Promise<AxiosResponse<ISBUserResponse>> {
  return sbApiClient.get(ApiConfig.USER(username));
}

export function addUserByName(
  username: string
): Promise<AxiosResponse<ISBUserGenericResponse>> {
  return sbApiClient.post(ApiConfig.ADD_USER, { userName: username });
}

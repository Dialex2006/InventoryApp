import { apiClient } from "./client";
import { AxiosResponse } from "axios";
import { ILoginResponse, IRegisterResponse } from "../models/api/auth";

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

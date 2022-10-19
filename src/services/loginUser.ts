import { apiClient } from "./client";
import ApiConfig from "../config/api-config";
import { AxiosResponse } from "axios";
import { ILoginResponse } from "../models/api/login";

export default function loginUser(
  username: string,
  password: string
): Promise<AxiosResponse<ILoginResponse>> {
  return apiClient.post(ApiConfig.LOGIN, { username, password });
}

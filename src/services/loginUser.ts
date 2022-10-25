import { apiClient } from "./client";
import ApiConfig from "../config/api-config";
import { AxiosResponse } from "axios";
import { ILoginResponse } from "../models/api/login";

export default function loginUser(): Promise<AxiosResponse<ILoginResponse>> {
  return apiClient.get(ApiConfig.LOGIN);
}

import axios from "axios";
import ApiConfig from "../config/api-config";

const apiClient = axios.create({
  baseURL: ApiConfig.BASE_URL,
  responseType: "json",
});

const sbApiClient = axios.create({
  baseURL: ApiConfig.BASE_SPRINGBOOT_URL,
  responseType: "json",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  },
});

export { apiClient, sbApiClient };

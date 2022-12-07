/*
 * App config for apis
 */

const ApiConfig = {
  // TODO: change address after a proper dockerization
  BASE_URL: "http://localhost:8080",
  // GET
  // TODO: remove firebase api
  LOGIN: "/authenticationData.json",
  INVENTORY: "/inventory.json",
  //
  ALL_USERS: "/users",
  USER: (username: string) => `/users/${username}`,
  ALL_ASSETS: "/assets",
  ASSET_INFO: (assetName: string) => `/assets/name/${assetName}`,
  ASSET_UNIT_INFO: (assetSerialNumber: string) =>
    `/assets/number/${assetSerialNumber}`,
  // POST
  // TODO: remove firebase api
  REGISTER: "/authenticationData.json",
  ADD_ASSET: "/inventory.json",
  //
  ADD_USERS: "/users",
  ADD_ASSETS: "/assets",
  ASSIGN_ASSETS: "/assign",
};

export default ApiConfig;

/*
 * App config for apis
 */

const ApiConfig = {
  BASE_URL:
    "https://inventoryapp-6e44e-default-rtdb.europe-west1.firebasedatabase.app",
  // TODO: change address after a proper dockerization
  BASE_SPRINGBOOT_URL:
    "http://inventoryappspringboot-env-1.eba-pp2xpujd.eu-north-1.elasticbeanstalk.com",
  // GET
  // TODO: remove firebase api
  LOGIN: "/authenticationData.json",
  INVENTORY: "/inventory.json",
  //
  ALL_USERS: "/users",
  USER: (username: string) => `/users/${username}`,
  ALL_SB_ASSETS: "/assets",
  SB_ASSET_BY_NAME: (assetName: string) => `/assets/name/${assetName}`,
  SB_ASSET_BY_NUMBER: (assetSerialNumber: string) =>
    `/assets/number/${assetSerialNumber}`,
  // POST
  // TODO: remove firebase api
  REGISTER: "/authenticationData.json",
  ADD_ASSET: "/inventory.json",
  //
  ADD_USER: "/users/add",
  ADD_SB_ASSET: "/assets/add",
  ASSIGN_SB_ASSETS: "/assets/assign",
  // DELETE
  DELETE_ASSET_BY_ID: (id: number) => `assets/delete/id/${id}`,
  DELETE_ASSET_BY_NUMBER: (serialNumber: string) =>
    `assets/delete/number/${serialNumber}`,
};

export default ApiConfig;

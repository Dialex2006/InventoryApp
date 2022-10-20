// TODO: placeholder, replace with an appropriate structure when ready

export interface ILoginRequestState {
  type: string;
  username: string;
  password: string;
}

interface IResponse {
  status: string;
  data: Record<string, string>;
}

export interface ILoginResponseState {
  type: string;
  username: string;
  response: IResponse;
}

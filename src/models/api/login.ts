// TODO: placeholder, replace with an appropriate structure when ready
export interface ILoginResponse {
  status: "ok" | "error";
  error?: string;
  data?: {
    message: string;
    jwt: string;
    redirect: string;
  };
}

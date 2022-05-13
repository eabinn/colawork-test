import { APIClient } from "../../network/APIClient";

type LoginInput = {
  user_id: string;
  user_pw: string;
};

type LoginOutput = {
  access_token: string;
  msg: string;
};

export default async function loginService(input: LoginInput) {
  const apiClient = new APIClient();

  return apiClient.request<LoginOutput, LoginInput>({
    path: "login",
    method: "POST",
    params: input,
  });
}

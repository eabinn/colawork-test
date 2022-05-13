import { APIClient } from "../../network/APIClient";

export type Todo = {
  id: number;
  value: string;
};

type MeOutput = {
  mag: "successs";
  result: {
    current_user: string;
    "todo-list": Todo[];
  };
};

export default async function meService() {
  const apiClient = new APIClient();

  return apiClient.request<MeOutput>({
    path: "me",
    method: "GET",
  });
}

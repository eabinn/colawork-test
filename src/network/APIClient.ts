import axios from "axios";
import { Cookies } from "react-cookie";

type HttpMethod = "GET" | "POST";

type APIRequest<T> = {
  path: string;
  method: HttpMethod;
  params?: T;
};

export type APIErrorResponse = {
  msg: string;
};

export class APIClient {
  static shared = new APIClient();

  private readonly baseURL: string = "https://assignment.alocados.xyz/todo";

  request<T, U = any>(request: APIRequest<U>): Promise<T> {
    const isRead = request.method === "GET";

    return new Promise<T>((resolve, reject) => {
      axios
        .request({
          url: request.path,
          method: request.method,
          baseURL: this.baseURL,
          params: isRead && request.params,
          data: !isRead && request.params,
          headers: {
            Authorization: `Bearer ${new Cookies().get("access-token")}`,
          },
        })
        .then((response) => {
          resolve(this.parse<T>(response));
        })
        .catch((err) => {
          reject(this.parseError(err));
        });
    });
  }

  private parse<U>(response: any): U {
    return response.data;
  }

  private parseError(err: any): APIErrorResponse {
    return err.response.data;
  }
}

import { Cookies } from "react-cookie";
import { CookieSetOptions } from "universal-cookie";

type HandleCookieList = "access-token";

export default function useCookies() {
  const cookies = new Cookies();
  const options: CookieSetOptions = { path: "/", secure: true, sameSite: "none" };

  const set = (key: HandleCookieList, value: string) => {
    cookies.set(key, value, options);
  };

  const get = (key: HandleCookieList) => {
    return cookies.get(key);
  };

  return {
    get,
    set,
  };
}

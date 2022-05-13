export type LoginInputType = {
  user_id: string;
  user_pw: string;
};

export type AuthContextType = {
  login: (input: LoginInputType) => Promise<void>;
  logout: () => void;
  authLoading: boolean;
  authErrorMsg: string;
  resetAuthErrorMsg: () => void;
  isUserLogin: boolean;
};

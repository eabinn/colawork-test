import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

export function useAuthState() {
  const state = useContext(AuthContext);

  if (!state) {
    throw new Error("Cannot find AuthProvider");
  }

  return state;
}

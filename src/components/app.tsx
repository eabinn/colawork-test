import React from "react";
import { Box } from "@mui/material";
import { LoggedInRouter } from "../routers/logged-in-router";
import { LoggedOutRouter } from "../routers/logged-out-router";
import { useAuthState } from "../hooks/useAuthContext";

export const App = () => {
  const authState = useAuthState();

  return <Box sx={{ backgroundColor: "#F0F4FA" }}>{authState.isUserLogin ? <LoggedInRouter /> : <LoggedOutRouter />}</Box>;
};

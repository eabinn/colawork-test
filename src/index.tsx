import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app";
import { AuthProvider } from "./contexts/AuthProvider";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./assets/css/reset.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0053F4",
    },
    error: {
      main: "#DB3645",
    },
    info: {
      main: "#142C67",
    },
    text: {
      disabled: "#5F6E8C",
      primary: "#131924",
      secondary: "#5F6E8C",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

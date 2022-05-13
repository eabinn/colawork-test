import React from "react";
import { BrowserRouter, Routes, Route, PathRouteProps, Navigate } from "react-router-dom";
import { Header } from "../components/header";
import { Login } from "../pages/login";

const routes: PathRouteProps[] = [
  {
    path: "/",
    element: <Login />,
  },
];

export const LoggedOutRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Navigate replace to="/" />} />
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

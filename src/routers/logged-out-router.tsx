import React from "react";
import { BrowserRouter, Routes, Route, PathRouteProps } from "react-router-dom";
import { Header } from "../components/header";
import { Login } from "../pages/login";
import { NotFound } from "../pages/NotFound";

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
        <Route path="*" element={<NotFound />} />
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

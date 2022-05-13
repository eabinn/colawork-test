import React from "react";
import { BrowserRouter, Routes, Route, PathRouteProps } from "react-router-dom";
import { Header } from "../components/header";
import { TodoProvider } from "../contexts/TodoProvider/TodoProvider";
import { NotFound } from "../pages/NotFound";
import { Todos } from "../pages/todos";

const routes: PathRouteProps[] = [
  {
    path: "/list",
    element: <Todos />,
  },
];

export const LoggedInRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <TodoProvider>
        <Routes>
          <Route path="*" element={<NotFound />} />
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
};

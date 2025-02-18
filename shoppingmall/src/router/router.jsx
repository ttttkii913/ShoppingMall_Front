import { createBrowserRouter } from "react-router-dom";
import { Main } from "../pages/main/Main";
import { Login } from "../pages/login/Login";

export const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/login", element: <Login /> },
]);

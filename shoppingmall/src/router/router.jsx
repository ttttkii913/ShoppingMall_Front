import { createBrowserRouter } from "react-router-dom";
import { Main } from "../pages/main/Main";
import { Login } from "../pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/login", element: <Login /> },
    ],
  },
]);

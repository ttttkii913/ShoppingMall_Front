import { createBrowserRouter } from "react-router-dom";
import { Main } from "../pages/main/Main";
import { Login } from "../pages/login/Login";
import { Join } from "../pages/join/Join";
import { MyPage } from "../pages/myPage/MyPage";


export const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/login", element: <Login /> },
  { path: "/join", element: <Join /> },
  { path: "/mypage", element: <MyPage /> }
]);

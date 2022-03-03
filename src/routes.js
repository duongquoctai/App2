
import { lazy } from "react"

const Login = lazy(() => import("pages/Login"));
const Home = lazy(() => import("pages/Home"));
const HomeRedux = lazy(() => import("pages/HomeRedux"));
const NotFound = lazy(() => import("pages/NotFound"));

export const routes = [
    {
        path: "/",
        exact: true,
        page: Login
    },
    {
        path: "/home",
        exact: true,
        page: Home
    },
    {
        path: "/home-redux",
        exact: true,
        page: HomeRedux
    },
    {
        page: NotFound
    }

];

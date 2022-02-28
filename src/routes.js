
import { lazy } from "react"

const Login = lazy(() => import("pages/Login"));
const Home = lazy(() => import("pages/Home"));
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
        page: NotFound
    }

];

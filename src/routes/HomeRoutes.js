import { lazy } from "react";

const HomeRoutes = {
  path: "*",
  routes: [
    {
      path: "/",
      exact: true,
      component: lazy(() => import("pages/Login")),
    },
    {
      component: () => lazy(() => import("pages/NotFound")),
    },
  ],
};

export default HomeRoutes;

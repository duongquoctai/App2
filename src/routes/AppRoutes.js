import React, { lazy } from "react";
import Layout from "src/layout";
import { Redirect } from "react-router-dom";

// ----------------------------------------------------------------------

const AppRoutes = {
  path: "/app",
  layout: Layout,
  routes: [
    {
      exact: true,
      path: "/app/home",
      component: lazy(() => import("pages/Home")),
    },
    {
      exact: true,
      path: "/app/redux",
      component: lazy(() => import("pages/HomeRedux")),
    },
    {
      component: () => <Redirect to="/404" />,
    },
  ],
};

export default AppRoutes;

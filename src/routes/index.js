import React, { Suspense, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import HomeRoutes from "./HomeRoutes";
import AppRoutes from "./AppRoutes";

export function renderRoutes(routes = []) {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        {routes.map((route, i) => {
          const Layout = route.layout || Fragment;
          const Component = route.component;
          const Guard = route.guard || Fragment;
          console.log(route.routes);
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      renderRoutes(route.routes)
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}

const routes = [AppRoutes, HomeRoutes];

export default routes;

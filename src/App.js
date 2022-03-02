import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { routes } from 'routes'
import "./App.css"
import LinearProgress from '@material-ui/core/LinearProgress';




const App = () => (
  <Router>
    <Suspense
      fallback={
        <LinearProgress />
      }>
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            exact={route.exact}
            path={route.path}
            render={props => (
              <route.page {...props} />
            )}
          />
        ))}
      </Switch>
    </Suspense>

  </Router>

);

export default App;
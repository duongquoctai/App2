import React, { Suspense } from "react";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Router } from "react-router-dom";
import routes, { renderRoutes } from "./routes";
import "./App.css";
import store from "./redux/store";

const history = createBrowserHistory();

function App() {
  console.log(routes);
  return (
    <Suspense fallback={<LinearProgress />}>
      <Provider store={store}>
        <Router history={history}>{renderRoutes(routes)}</Router>
      </Provider>
    </Suspense>
  );
}

export default App;

import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { RocketsContextProvider } from "./contexts/RocketsContext";
import Nav from "./components/Navigation/Nav";
import Home from "./screens/Home";
import Loader from "./components/UI/Loader";

const Launches = React.lazy(() => import("./screens/Launches"));
const LaunchDetail = React.lazy(() => import("./screens/LaunchDetail"));
const Rockets = React.lazy(() => import("./screens/Rockets"));
const RocketDetail = React.lazy(() => import("./screens/RocketDetail"));

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/rockets" exact>
        <Rockets />
      </Route>
      <Route path="/rockets/:rocketId">
        <RocketDetail />
      </Route>
      <Route path="/launches" exact>
        <Launches />
      </Route>
      <Route path="/launches/:flightNumber">
        <LaunchDetail />
      </Route>
    </Switch>
  );

  const fallback = (
    <div className="flex w-screen h-screen justify-center items-center ">
      <Loader />
    </div>
  );

  return (
    <RocketsContextProvider>
      <Suspense fallback={fallback}>
        <Router basename={process.env.PUBLIC_URL}>
          <Nav />
          {routes}
        </Router>
      </Suspense>
    </RocketsContextProvider>
  );
};

export default App;

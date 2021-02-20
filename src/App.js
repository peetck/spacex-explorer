import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { RocketsContextProvider } from "./contexts/RocketsContext";
import Nav from "./components/Navigation/Nav";
import Home from "./screens/Home";

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

  return (
    <RocketsContextProvider>
      <Suspense
        fallback={
          <div className="w-screen h-screen flex justify-center items-center text-xl">
            Loading...
          </div>
        }
      >
        <Router basename={process.env.PUBLIC_URL}>
          <Nav />
          {routes}
        </Router>
      </Suspense>
    </RocketsContextProvider>
  );
};

export default App;

import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { RocketsContextProvider } from "./contexts/RocketsContext";
import Nav from "./components/Navigation/Nav";

import Loader from "./components/UI/Loader";

const Home = React.lazy(() => import("./pages/Home"));
const Launches = React.lazy(() => import("./pages/Launches"));
const LaunchDetail = React.lazy(() => import("./pages/LaunchDetail"));
const Rockets = React.lazy(() => import("./pages/Rockets"));
const RocketDetail = React.lazy(() => import("./pages/RocketDetail"));

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
      <Route>
        <Redirect to="/" />
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

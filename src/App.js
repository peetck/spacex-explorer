import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { RocketsContextProvider } from "./contexts/RocketsContext";
import Nav from "./components/Navigation/Nav";
import Home from "./screens/Home";
import Launches from "./screens/Launches";
import LaunchDetail from "./screens/LaunchDetail";
import Rockets from "./screens/Rockets";
import RocketDetail from "./screens/RocketDetail";

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
      <Router>
        <Nav />
        {routes}
      </Router>
    </RocketsContextProvider>
  );
};

export default App;

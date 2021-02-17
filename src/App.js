import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Navigation/Nav";
import Home from "./screens/Home";
import Launches from "./screens/Launches";
import LaunchDetail from "./screens/LaunchDetail";
import Rockets from "./screens/Rockets";

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/rockets" exact>
        <Rockets />
      </Route>
      <Route path="/rockets/:rocket_id">{/*  */}</Route>
      <Route path="/launches" exact>
        <Launches />
      </Route>
      <Route path="/launches/:flight_number">
        <LaunchDetail />
      </Route>
    </Switch>
  );

  return (
    <Router>
      <Nav />
      {routes}
    </Router>
  );
};

export default App;

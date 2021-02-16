import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Navigation/Nav";
import Home from "./screens/Home";
import Launches from "./screens/Launches";
import Rockets from "./screens/Rockets";

const App = () => {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/rockets">
          <Rockets />
        </Route>
        <Route path="/launches">
          <Launches />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

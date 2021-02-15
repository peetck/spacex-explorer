import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Launches from "./pages/Launches";
import Rockets from "./pages/Rockets";

const App = () => {
  return (
    <Router>
      {/* Nav */}

      <Link to="/">Home</Link>
      <Link to="/rockets">Rockets</Link>
      <Link to="/launches">Launches</Link>

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

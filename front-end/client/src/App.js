import Accueil from "./accueil";
import AllPlayers from "./allPlayers";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/allPlayers" component={AllPlayers} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
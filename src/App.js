import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';

function App() {
  return (
    <Router>
      
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/leagueDetails/:leagueId">
            <LeagueDetails />
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>
    </Router>
  );
}

export default App;

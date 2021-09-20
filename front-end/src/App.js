import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import LandingPage from "./components/pages/LandingPage";
import Navbar1 from "./components/Navbar1";

function App() {
  return (
    <Router>
      <Navbar1 />
      <Switch>
        <Route exact path="/" exact component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;

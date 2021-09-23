import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import LandingPage from "./components/pages/landingPage/LandingPage";
import Construction from "./components/pages/constructionPage/Construction";
import Interior from "./components/pages/interiorPage/Interior";
import Renovation from "./components/pages/renovationPage/Renovation";
import About from "./components/pages/aboutPage/About";

// import SignIn from "./components/pages/signupPage/signIn";
// import SignUp from "./components/pages/signupPage/signUp";

import Navbar1 from "./components/Navbar1";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar1 />
      <Switch>
        <Route exact path="/" exact component={LandingPage} />
        <Route exact path="/construction" exact component={Construction} />
        <Route exact path="/interior-design" exact component={Interior} />
        <Route exact path="/renovation" exact component={Renovation} />
        <Route exact path="/about" exact component={About} />
        {/* <Route exact path="/" exact component={SignIn} />
        <Route exact path="/" exact component={SignUp} /> */}
      </Switch>
    </Router>
  );
}

export default App;

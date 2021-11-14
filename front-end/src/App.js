import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useEffect, useState } from "react";
import axios from "axios"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Scroll to top
import ScrollToTop from "./components/ScrollToTop";

// Pages
import LandingPage from "./components/pages/landingPage/LandingPage";
import Construction from "./components/pages/constructionPage/Construction";
import Interior from "./components/pages/interiorPage/Interior";
import Renovation from "./components/pages/renovationPage/Renovation";
import About from "./components/pages/aboutPage/About";
import Gallery from "./components/pages/gallery/gallery";

// import SignIn from "./components/pages/signupPage/signIn";
// import SignUp from "./components/pages/signupPage/signUp";

import Navbar1 from "./components/Navbar1";
import Navbar from "./components/Navbar";

function App() {
  const [home, setHome] = useState("")
  useEffect(()=>{
          axios.get('http://localhost:3001/home').then(function (response) {
            setHome(response.data )
          })
        }, [])
  
  return (

   
   
    <Router>
      
      <ScrollToTop />
      <Navbar />
      {home}
      
      <Switch>
        
        <Route path="/" exact component={LandingPage} />
        <Route path="/construction" exact component={Construction} />
        <Route path="/interior-design" exact component={Interior} />
        <Route path="/renovation" exact component={Renovation} />
        <Route path="/about" exact component={About} />
        <Route path="/interior-design/gallery" exact component={Gallery} />
        {/* <Route exact path="/" exact component={SignIn} />
        <Route exact path="/" exact component={SignUp} /> */}
      </Switch>
    </Router>
  );
}

export default App;





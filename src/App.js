import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css";
import Home from "./Layouts/Home"
import Portfolio from "./Layouts/Portfolio"
import Resume from "./Layouts/Resume"

const App = () => (
  <Router>
    <Switch>
      <Route exact path ="/" component={Home} />
      <Route exact path ="/home" component={Home} />
      <Route exact path ="/portfolio" component={Portfolio} />
      <Route exact path ="/resume" component={Resume} />
    </Switch>
  </Router>  
)

export default App;

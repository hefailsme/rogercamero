import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css";
import Home from "./Layouts/Home"
import Portfolio from "./Layouts/Portfolio"

const App = () => (
  <Router>
    <Switch>
      <Route exact path ="/" component={Home} />
      <Route exact path ="/home" component={Home} />
      <Route exact path ="/portfolio" component={Portfolio} />
    </Switch>
  </Router>  
)

export default App;

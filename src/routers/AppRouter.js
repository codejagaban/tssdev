import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import HomePage from "../pages";
import About from "../pages/about";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={About}/>
    </Switch>
  </Router>
)

export default AppRouter
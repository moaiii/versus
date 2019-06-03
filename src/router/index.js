import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// import view components
import Home from '../ui/views/Home';

// routes
// import routes from './routes.json';

export default(
  <Router basename="/">
    <div className="Router__container">
      <Route
        exact path={ '/' }
        component={ Home }/>
    </div>
  </Router>
)


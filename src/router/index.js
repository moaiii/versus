import React from "react";
import { Route, Router } from 'react-router-dom';
import history from "./history";

// import view components
import Home from '../ui/views/Home';

export default(
  <Router basename="/" history={history}>
    <div className="Router__container">
      <Route
        exact path={ '/' }
        component={ Home }/>
    </div>
  </Router>
)


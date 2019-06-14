import "./stylesheet/main.css";

import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import router from "./router";
import {store} from "./utils/redux";


import('./utils/initialize')
  .then(({default: init}) => {
    init.getCountries(store);
    init.getSeasons(store);

    ReactDOM.render(<Provider store={store}>{router}</Provider>,
      document.getElementById("root"));
  });

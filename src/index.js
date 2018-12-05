import "./stylesheet/main.css";

import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import router from "./router";
import store from "./db/store";

import(`versus-common-link`)
  .then(common => {
    common.default.utils.startup(store);

    ReactDOM.render(<Provider store={store}>{router}</Provider>,
      document.getElementById("root"));
  })
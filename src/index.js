import "./stylesheet/main.css";

import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import router from "./router";
import store from "./utils/redux/store";


// import(null)
//   .then(() => {
//     // TODO:
//     // start up script here

    ReactDOM.render(<Provider store={store}>{router}</Provider>,
      document.getElementById("root"));
  // });

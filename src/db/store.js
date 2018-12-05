// redux
import { applyMiddleware, compose, createStore } from "redux";

import common from 'versus-common-link';
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true, diff: true
});

const customMiddleWare = store => next => action => {
  common.middleware(store, next, action);
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  common.reducers,
  composeEnhancer(applyMiddleware(customMiddleWare, logger))
);

export default store;
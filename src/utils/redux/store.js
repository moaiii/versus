// redux
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import middlewareRouter from './middleware';
import {
  leaguesReducer,
  gamesReducer,
  datesReducer,
  countriesReducer,
  dataReducer
} from '../../ui/views/Home/Home.reducer';

const logger = createLogger({
  collapsed: true, diff: true
});

const customMiddleWare = store => next => action => {
  middlewareRouter(store, next, action);
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Combine Reducers
const reducers = combineReducers({
  leaguesReducer,
  gamesReducer,
  datesReducer,
  countriesReducer,
  dataReducer
});


let store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(customMiddleWare, logger))
);

export default store;
// redux
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import middlewareRouter from './middleware';

// import reducer
import { CountrySelectorReducer } from '../../ui/components/molecules/CountrySelector';
import { DateSelectorReducer } from '../../ui/components/molecules/DateSelector';
import { LeagueSelectorReducer } from '../../ui/components/molecules/LeagueSelector';
import { GamesListReducer } from '../../ui/components/organisms/GamesList';
import { RootSelectorsReducer } from '../../ui/components/organisms/RootSelectors';
import { StandingsTableReducer } from '../../ui/components/organisms/StandingsTable';
import { TeamListReducer } from '../../ui/components/organisms/TeamList';
import FiltersReducer from '../../ui/components/organisms/Filters/Filters.reducer';


const logger = createLogger({
  collapsed: true, diff: true
});

const customMiddleWare = store => next => action => {
  middlewareRouter(store, next, action);
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  CountrySelectorReducer,
  DateSelectorReducer,
  LeagueSelectorReducer,
  FiltersReducer,
  GamesListReducer,
  RootSelectorsReducer,
  StandingsTableReducer,
  TeamListReducer,
});


let store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(customMiddleWare, logger))
);

export default store;

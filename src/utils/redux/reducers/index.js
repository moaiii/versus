import {combineReducers} from 'redux';
import countriesReducer from './countries.reducer';
import datesReducer from './dates.reducer';
import gamesReducer from './games.reducer';
import leaguesReducer from './leagues.reducer';
// import logger from 'redux-logger';
// import middleware from '../middleware/index';

const reducers = {
  countriesReducer,
  leaguesReducer,
  datesReducer,
  gamesReducer
};

const combinedReducers = combineReducers(reducers);

export default combinedReducers;

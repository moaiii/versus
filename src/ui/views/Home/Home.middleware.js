// @Flow
import * as actions from './Home.actions'
import fp from 'lodash/fp';
import {networkRequest} from '../../../utils/network';
import endpoints from '../../../utils/enums/endpoints';
import seasonDates from '../../../utils/enums/season-dates.json';

const countriesMiddleware = {
  '[COUNTRIES] GET_COUNTRIES__SUBMIT': async (store, next, action) => {
    const _endpoint = endpoints['GET_COUNTRIES'];
    try {
      const res = await networkRequest(_endpoint, fp.get('payload', action));
      store.dispatch(actions.getCountries.resolved(res.data));
    } catch (error) {
      console.error(`[ERROR] get countries middleware\n`, error);
      store.dispatch(actions.getCountries.rejected(JSON.stringify(error)));
    }
  },

  '[COUNTRIES] SET_SELECTED_COUNTRY': async (store, next, action) => {
    if(action) {
      store.dispatch(actions.getLeagues.submit(action.payload));
    }
  },
};



const seasonsMiddleware = {
  '[DATES] GET_SEASONS': async (store, next, action) => {
    store.dispatch(actions.setSeasons(seasonDates));
  },

  '[DATES] SET_DATE_SELECTION': async (store, next, action) => {
    const {start, end} = action.payload.dates;
    const _dates = {
      'from': `${start.year}-${start.month}-${start.day}`,
      'to': `${end.year}-${end.month}-${end.day}`,
    };
    action.payload = _dates;
    const league_id = store.getState().leaguesReducer.selected.league_id;
    store.dispatch(actions.getGames.submit({
      req: {..._dates, league_id},
      middlewareMode: "last"
    }));
  },
};


const gamesMiddleware = {
  '[GAMES] GET_GAMES__SUBMIT': async (store, next, action) => {
    const _endpoint = endpoints['GET_GAMES'];
    try {
      const res = await networkRequest(_endpoint, fp.get('payload.req', action));
      store.dispatch(actions.getGames.resolved(res.data));
    } catch (error) {
      console.error(`[ERROR] get games middleware\n`, error);
      store.dispatch(actions.getGames.rejected(JSON.stringify(error)));
    }
  }
};


const leaguesMiddleware = {
  '[LEAGUES] GET_LEAGUES__SUBMIT': async (store, next, action) => {
    const _endpoint = endpoints['GET_LEAGUES'];
    try {
      const res = await networkRequest(_endpoint, {
        country_id: action.payload.country_id
      });
      console.log(res)
      store.dispatch(actions.getLeagues.resolved(res.data));
    } catch (e) {
      console.error(`[ERROR] get leagues middleware\n`, e);
      store.dispatch(actions.getLeagues.rejected(JSON.stringify(e)));
    }
  },

  '[LEAGUES] SET_SELECTED_LEAGUE': async (store, next, action) => {},

  '[LEAGUES] GET_LEAGUE_STANDINGS__SUBMIT': async (store, next, action) => {
    const _endpoint = endpoints['GET_LEAGUE_STANDINGS'];
    try {
      const res = await networkRequest(_endpoint, fp.get('payload', action));
      store.dispatch(actions.getLeagueStandings.resolved(res.data));
    } catch (error) {
      console.error(`[ERROR] get leagues middleware\n`, error);
      store.dispatch(actions.getLeagueStandings.rejected(JSON.stringify(error)));
    }
  }
};


export {
  countriesMiddleware,
  seasonsMiddleware,
  gamesMiddleware,
  leaguesMiddleware
}
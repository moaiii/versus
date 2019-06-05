// @Flow
import * as actions from './Home.actions'
import fp from 'lodash/fp';
import {networkRequest} from '../../../utils/network';
import endpoints from '../../../utils/enums/endpoints';
import seasonDates from '../../../utils/enums/season-dates.json';
import { getAllTeamsAndPlayers, getThisTeamsGames, generateStandings } from '../../../utils/functions';
import { sortBy } from 'lodash';

const dataMiddleware = {

  /**
   * @dispatches setTeams
   */
  '[DATA] GENERATE_TEAM_OBJECTS': async (store, next, action) => {
    try {
      const allTeams = getAllTeamsAndPlayers(action.payload);

      const teamsWithData = allTeams
        .map(team => {
          return {
            ...team,
            games: getThisTeamsGames(team.name)(action.payload)
          }
        })
        .map(team => {
          return {
            ...team,
            standings: generateStandings(team.name, team.games)
          }
        });

        store.dispatch(actions.setTeams(teamsWithData));

    } catch (error) {
      console.error(`[ERROR] generating the team objects\n`, error);
    }
  },

  /**
   * @dispatches generateTable
   */
  '[DATA] SET_TEAMS': async (store, next, action) => {
    try {
      store.dispatch(actions.generateTable());
    } catch (error) {
      console.error(`[ERROR] setting teams games\n`, error);
    }
  },

  '[DATA] GENERATE_TABLE': async (store, next, action) => {
    try {
      const { dataReducer: { teams } } = store.getState();
      const tableSorted = sortBy(teams, el => el.standings.pointsTotal).reverse();
      store.dispatch(actions.setTable(tableSorted));

    } catch (error) {
      console.error(`[ERROR] setting teams games\n`, error);
    }
  }
}


const countriesMiddleware = {

  /**
   * @dispatches getCountries
   */
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

  /**
   * @dispatches getLeagues
   */
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
      store.dispatch(actions.generateTeamObjects(res.data));
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
  leaguesMiddleware,
  dataMiddleware
}
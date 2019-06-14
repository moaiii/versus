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
      const tableSorted = sortBy(teams.raw, el => el.standings.pointsTotal).reverse();

      // unsorted table goes to raw
      store.dispatch(actions.setDisplayedTable(tableSorted));


      // sorted table goes to display
      store.dispatch(actions.setDisplayedTable(tableSorted));

    } catch (error) {
      console.error(`[ERROR] setting teams games\n`, error);
    }
  }
}





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



export {
  countriesMiddleware,
  seasonsMiddleware,
  gamesMiddleware,
  leaguesMiddleware,
  dataMiddleware
}
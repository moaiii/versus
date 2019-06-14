// @flow
import { setTeams } from './TeamList.action';
import { generateTable } from '../StandingsTable/StandingsTable.actions';
import {
  getAllTeamsAndPlayers,
  getThisTeamsGames,
  generateStandings
 } from '../../../../utils/functions';

export default {
  /**
   * @dispatches setTeams
   */
  '[TEAM_LIST] GENERATE_TEAM_OBJECTS': async (store, next, action) => {
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

        store.dispatch(setTeams(teamsWithData));

    } catch (error) {
      console.error(`[ERROR] generating the team objects\n`, error);
    }
  },


  /**
   * @dispatches generateTable
   */
  '[TEAM_LIST] SET_TEAMS': async (store, next, action) => {
    try {
      store.dispatch(generateTable());
    } catch (error) {
      console.error(`[ERROR] setting teams games\n`, error);
    }
  },
}

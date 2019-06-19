// @flow
import {
  generateTeamObjects,
  setRawTeams,
  setDisplayedTeams,
  setDeletedTeams,
} from './TeamList.action';

import {
  generateTable
} from '../StandingsTable/StandingsTable.actions';

import {
  setFilteredGames
} from '../GamesList/GamesList.action';

import {
  getAllTeamsAndPlayers,
  getThisTeamsGames,
  generateStandings
} from '../../../../utils/functions';


export default {

  '[TEAM_LIST] GENERATE_TEAM_OBJECTS': async (store, next, action) => {
    try {
      const games = action.payload;
      const allTeams = getAllTeamsAndPlayers(games);

      const teamsWithData = allTeams
        .map(team => {
          return {
            ...team,
            games: getThisTeamsGames(team.name)(games)
          }
        })
        .map(team => {
          return {
            ...team,
            standings: generateStandings(team.name, team.games)
          }
        });

      store.dispatch(setRawTeams(teamsWithData));
      store.dispatch(setDisplayedTeams(teamsWithData));
      store.dispatch(generateTable());

    } catch (error) {
      console.error(`[ERROR] generating the team objects\n`, error);
    }
  },


  '[TEAM_LIST] SET_RAW_TEAMS': async (store, next, action) => {},


  '[TEAM_LIST] SET_DELETED_TEAMS': async (store, next, action) => {
    try {
      const { teams: { raw }} = store.getState().TeamListReducer;
      const deletedTeamsList = action.payload;

      const displayed = raw
        .filter(team => !deletedTeamsList.includes(team.name));

      store.dispatch(setFilteredGames({
        teamExclusions: deletedTeamsList
      }));

      store.dispatch(setDisplayedTeams(displayed));
      store.dispatch(generateTable());

    } catch (error) {
      console.error(`[ERROR] setting teams games\n`, error);
    }
  },
}

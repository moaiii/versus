import * as actions from './StandingsTable.actions';
import { generateTeamObjects } from '../../../views/Home/Home.actions';
import { removeTeamsFromGameData } from '../../../../utils/functions/removeTeamsFromGameData';

const standingsMiddleware = {
  /**
   * @dispatches generateTable
   */
  '[STANDINGS TABLE] REMOVE_TEAMS': async (store, next, action) => {
    try {
      const { games } = store.getState().gamesReducer;
      const { selected } = store.getState().standingsReducer;
      const prunedGames = removeTeamsFromGameData(selected)(games);
      store.dispatch(generateTeamObjects(prunedGames));
    } catch (error) {
      console.error(`[ERROR] deleting teams from the standings table\n`, error);
    }
  },
}

export { standingsMiddleware };
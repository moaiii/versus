// @Flow
import {
  setDisplayedTable
} from './StandingsTable.actions';
import {setDeletedTeams} from '../TeamList/TeamList.action';
import { filterGames, excudeOppositionTeams } from '../../../../utils/functions/games';
import { sortBy } from 'lodash';


export default {
  '[STANDINGS_TABLE] SET_TABLE': async (store, next, action) => {},


  '[STANDINGS_TABLE] SET_DISPLAYED_TABLE': async (store, next, action) => {},


  '[STANDINGS TABLE] REMOVE_TEAMS': async (store, next, action) => {
    try {
      const { selectedForDeletion } = action.payload;
      store.dispatch(setDeletedTeams(selectedForDeletion));
    } catch (error) {
      console.error(`[ERROR] deleting teams from the standings table\n`, error);
    }
  },


  '[STANDINGS_TABLE] GENERATE_TABLE': async (store, next, action) => {
    try {
      const {TeamListReducer: {teams}} = store.getState();

      const tableSorted = sortBy(teams.displayed, el => el.standings.pointsTotal).reverse();

      store.dispatch(setDisplayedTable(tableSorted));

    } catch (error) {
      console.error(`[ERROR] setting teams games\n`, error);
    }
  }
}

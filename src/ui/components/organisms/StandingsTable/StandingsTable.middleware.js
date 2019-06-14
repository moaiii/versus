// @Flow
import {
  setDisplayedTable
} from './StandingsTable.actions';
import { sortBy } from 'lodash';


export default {
  '[STANDINGS_TABLE] SET_TABLE': async (store, next, action) => {},


  '[STANDINGS_TABLE] SET_DISPLAYED_TABLE': async (store, next, action) => {},


  '[STANDINGS_TABLE] GENERATE_TABLE': async (store, next, action) => {
    try {
      const { dataReducer: { teams } } = store.getState();

      const tableSorted = sortBy(teams.raw, el => el.standings.pointsTotal).reverse();

      // unsorted table goes to raw
      store.dispatch(setDisplayedTable(tableSorted));

      // sorted table goes to display
      store.dispatch(setDisplayedTable(tableSorted));

    } catch (error) {
      console.error(`[ERROR] setting teams games\n`, error);
    }
  }
}

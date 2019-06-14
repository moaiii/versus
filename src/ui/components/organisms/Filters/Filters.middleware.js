// @flow
import * as actions from './Filters.action';
import { filterGames } from '../../../../utils/functions';
import { setDisplayedTeams } from '../../../views/Home/Home.actions';

export default {
  '[FILTERS] SET': async (store, next, action) => {
    const { key, value } = action.payload;

    if (key === 'timeWindow') {
      const currentGamesDisplayed = store.getState().gamesReducer;

      const gamesFiltered = filterGames({
        games: currentGamesDisplayed,
        timeWindow: value,
      });

      store.dispatch(setDisplayedTeams(gamesFiltered));
    }
  },

  // '[FILTERS] RESET': async (store, next, action) => {

  // }
}

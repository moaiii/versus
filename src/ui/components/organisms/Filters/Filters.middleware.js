import * as actions from './Filters.action';
import { filterGames } from '../../../../utils/functions';
import { setFilteredGames } from '../../../components/organisms/GamesList/GamesList.action';

export default {
  '[FILTERS] SET': async (store, next, action) => {
    const { key, value: timeWindow } = action.payload;

    if (key === 'timeWindow') {
      const {games} = store.getState().GamesListReducer;

      const gamesFiltered = filterGames({
        games,
        timeWindow,
      });

      store.dispatch(setFilteredGames(gamesFiltered));
    }
  },
}

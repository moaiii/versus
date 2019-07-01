// @Flow
import { getGames, setFilteredGames } from './GamesList.action';
import { generateTeamObjects } from '../TeamList/TeamList.action';
import fp from 'lodash/fp';
import {networkRequest} from '../../../../utils/network';
import endpoints from '../../../../utils/enums/endpoints';
import {filterGames} from '../../../../utils/functions';


export default {
  '[GAMES] GET_GAMES__SUBMIT': async (store, next, action) => {
    const _endpoint = endpoints['GET_GAMES'];

    try {
      const res = await networkRequest(_endpoint, fp.get('payload.req', action));
      store.dispatch(getGames.resolved(res.data));
      store.dispatch(generateTeamObjects(res.data));

    } catch (error) {
      console.error(`[ERROR] get games middleware\n`, error);
      store.dispatch(getGames.rejected(JSON.stringify(error)));
    }
  },


  // '[GAMES] GET_GAMES__RESOLVED': async (store, next, action) => {
  //   store.dispatch(setFilteredGames(action.payload));
  // },


  // '[GAMES] SET_FILTERED_GAMES': async (store, next, action) => {
  //   const {
  //     team,
  //     teamExclusions,
  //     teamInclusions,
  //     timeWindow,
  //     excludedPlayers,
  //   } = action.payload;

  //   const { games } = store.getState().GamesListReducer;

  //   const filteredGames = filterGames({
  //     games,
  //     ...action.payload
  //   });

  //   console.log('New filtered games!', filteredGames);
  //   action.payload = filteredGames;
  // },
};

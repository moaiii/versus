// @Flow
import { getGames } from './GamesList.action';
import { generateTeamObjects } from '../TeamList/TeamList.action';
import fp from 'lodash/fp';
import {networkRequest} from '../../../../utils/network';
import endpoints from '../../../../utils/enums/endpoints';


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
  }
};

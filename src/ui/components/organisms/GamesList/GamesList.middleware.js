// @Flow
import * as actions from './Home.actions'
import fp from 'lodash/fp';
import {networkRequest} from '../../../utils/network';
import endpoints from '../../../utils/enums/endpoints';


export default {
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

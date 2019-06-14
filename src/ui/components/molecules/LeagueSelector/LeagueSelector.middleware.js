import endpoints from '../../../../utils/enums/endpoints';
import {networkRequest} from '../../../../utils/network';
import {
  getLeagues
} from './LeagueSelector.action';

export default {
  '[LEAGUES] GET_LEAGUES__SUBMIT': async (store, next, action) => {
    const _endpoint = endpoints['GET_LEAGUES'];

    try {
      const res = await networkRequest(_endpoint, {
        country_id: action.payload.country_id
      });

      store.dispatch(getLeagues.resolved(res.data));

    } catch (e) {
      console.error(`[ERROR] get leagues middleware\n`, e);
      store.dispatch(getLeagues.rejected(JSON.stringify(e)));
    }
  },

  '[LEAGUES] SET_SELECTED_LEAGUE': async (store, next, action) => {
    // store.dispatch(getLeagues.resolved(res.data));
  },
}

// @Flow
import * as actions from './Home.actions'
import fp from 'lodash/fp';
import {networkRequest} from '../../../../utils/network';
import endpoints from '../../../../utils/enums/endpoints';
import seasonDates from '../../../../utils/enums/season-dates.json';
import { getAllTeamsAndPlayers, getThisTeamsGames, generateStandings } from '../../../../utils/functions';
import { sortBy } from 'lodash';


export default {

  /**
   * @dispatches getCountries
   */
  '[COUNTRIES] GET_COUNTRIES__SUBMIT': async (store, next, action) => {
    const _endpoint = endpoints['GET_COUNTRIES'];
    try {
      const res = await networkRequest(_endpoint, fp.get('payload', action));
      store.dispatch(actions.getCountries.resolved(res.data));
    } catch (error) {
      console.error(`[ERROR] get countries middleware\n`, error);
      store.dispatch(actions.getCountries.rejected(JSON.stringify(error)));
    }
  },

  /**
   * @dispatches getLeagues
   */
  '[COUNTRIES] SET_SELECTED_COUNTRY': async (store, next, action) => {
    if(action) {
      store.dispatch(actions.getLeagues.submit(action.payload));
    }
  },
};

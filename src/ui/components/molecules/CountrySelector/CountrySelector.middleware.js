// @Flow
import fp from 'lodash/fp';
import {networkRequest} from '../../../../utils/network';
import endpoints from '../../../../utils/enums/endpoints';

import {
  getCountries,
  setSelectedCountry
} from './CountrySelector.action';

import {
  getLeagues
} from '../LeagueSelector/LeagueSelector.action';


export default {
  '[COUNTRIES] GET_COUNTRIES__SUBMIT': async (store, next, action) => {
    const _endpoint = endpoints['GET_COUNTRIES'];

    try {
      const res = await networkRequest(_endpoint, fp.get('payload', action));
      store.dispatch(getCountries.resolved(res.data));

    } catch (error) {
      console.error(`[ERROR] get countries middleware\n`, error);
      store.dispatch(getCountries.rejected(JSON.stringify(error)));
    }
  },


  '[COUNTRIES] SET_SELECTED_COUNTRY': async (store, next, action) => {
    if(action) {
      store.dispatch(getLeagues.submit(action.payload));
    }
  },
};

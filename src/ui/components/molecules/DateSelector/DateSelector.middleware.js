// @Flow
import * as actions from './Home.actions'
import fp from 'lodash/fp';
import {networkRequest} from '../../../../utils/network';
import endpoints from '../../../../utils/enums/endpoints';
import seasonDates from '../../../../utils/enums/season-dates.json';
import { getAllTeamsAndPlayers, getThisTeamsGames, generateStandings } from '../../../../utils/functions';
import { sortBy } from 'lodash';


export default {
  '[DATES] GET_SEASONS': async (store, next, action) => {
    store.dispatch(actions.setSeasons(seasonDates));
  },


  '[DATES] SET_DATE_SELECTION': async (store, next, action) => {
    const {start, end} = action.payload.dates;

    const _dates = {
      'from': `${start.year}-${start.month}-${start.day}`,
      'to': `${end.year}-${end.month}-${end.day}`,
    };

    action.payload = _dates;

    const league_id = store.getState().leaguesReducer.selected.league_id;

    store.dispatch(actions.getGames.submit({
      req: {..._dates, league_id},
      middlewareMode: "last"
    }));
  },
};

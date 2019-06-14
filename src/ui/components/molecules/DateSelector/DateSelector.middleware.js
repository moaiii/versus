import seasonDates from '../../../../utils/enums/season-dates.json';
import { setSeasons } from './DateSelector.action';
import { getGames } from '../../organisms/GamesList/GamesList.action';


export default {
  '[DATES] GET_SEASONS': async (store, next, action) => {
    store.dispatch(setSeasons(seasonDates));
  },


  '[DATES] SET_DATE_SELECTION': async (store, next, action) => {
    const {start, end} = action.payload.dates;

    const _dates = {
      'from': `${start.year}-${start.month}-${start.day}`,
      'to': `${end.year}-${end.month}-${end.day}`,
    };

    action.payload = _dates;

    const { LeagueSelectorReducer } = store.getState();
    const { selected: { league_id } } = LeagueSelectorReducer;

    store.dispatch(getGames.submit({
      req: {..._dates, league_id},
      middlewareMode: "last"
    }));
  },
};

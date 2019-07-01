import { CountrySelectorMiddleware } from '../../ui/components/molecules/CountrySelector';
import { DateSelectorMiddleware } from '../../ui/components/molecules/DateSelector';
import { LeagueSelectorMiddleware } from '../../ui/components/molecules/LeagueSelector';
import { GamesListMiddleware } from '../../ui/components/organisms/GamesList';
import { RootSelectorsMiddleware } from '../../ui/components/organisms/RootSelectors';
import { StandingsTableMiddleware } from '../../ui/components/organisms/StandingsTable';
import { TeamListMiddleware } from '../../ui/components/organisms/TeamList';
import FiltersMiddleware from '../../ui/components/organisms/Filters/Filters.middleware';


const middlewares = {
  ...CountrySelectorMiddleware,
  ...DateSelectorMiddleware,
  ...LeagueSelectorMiddleware,
  ...FiltersMiddleware,
  ...GamesListMiddleware,
  ...RootSelectorsMiddleware,
  ...StandingsTableMiddleware,
  ...TeamListMiddleware
};


export default (store, next, action) => {
  const middlewareMode = action.payload
    ? action.payload.middlewareMode
    : false;

  if (!middlewareMode || middlewareMode === 'first') {
    next(action);
  }

  const middleware = middlewares[action.type];

  if (middleware) {
    try {
      middleware(store, next, action);
    } catch (e) {
      throw new Error(`[MIDDLEWARE ERROR] ${e}`);
    }
  }

  if (middlewareMode === 'last') {
    next(action);
  }
};

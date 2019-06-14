import {
  countriesMiddleware,
  seasonsMiddleware,
  gamesMiddleware,
  leaguesMiddleware,
  dataMiddleware
} from '../../ui/views/Home/Home.middleware';
import filtersMiddleware from '../../ui/components/organisms/Filters/Filters.middleware';


const middlewares = {
  ...countriesMiddleware,
  ...seasonsMiddleware,
  ...gamesMiddleware,
  ...leaguesMiddleware,
  ...dataMiddleware,
  ...filtersMiddleware
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
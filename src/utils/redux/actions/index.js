import * as countriesActions from './countries.action';
import * as leaguesActions from './leagues.action';
import * as gamesActions from './games.action';
import * as datesActions from './dates.action';

const actions = {
  ...countriesActions,
  ...leaguesActions,
  ...gamesActions,
  ...datesActions,
};

export default actions;

import { actionCreator, networkActionCreator } from '../../../../utils/redux';

export const getLeagues
= networkActionCreator("[LEAGUES] GET_LEAGUES");

export const setSelectedLeague
= actionCreator("[LEAGUES] SET_SELECTED_LEAGUE");

export const getLeagueStandings
= networkActionCreator("[LEAGUES] GET_LEAGUE_STANDINGS");
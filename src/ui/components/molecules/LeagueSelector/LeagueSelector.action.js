import { actionCreator, networkActionCreator } from '../../../../utils/redux';

export const getLeagues
= networkActionCreator("[LEAGUES] GET_LEAGUES");

export const setSelectedLeague
= actionCreator("[LEAGUES] SET_SELECTED_LEAGUE");

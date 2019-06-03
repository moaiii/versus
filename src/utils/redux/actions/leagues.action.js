// @flow
import redux from "../lib/redux";

export const getLeagues
  = redux.networkActionCreator("[LEAGUES] GET_LEAGUES");

export const setSelectedLeague
  = redux.actionCreator("[LEAGUES] SET_SELECTED_LEAGUE");

export const getLeagueStandings
  = redux.networkActionCreator("[LEAGUES] GET_LEAGUE_STANDINGS");

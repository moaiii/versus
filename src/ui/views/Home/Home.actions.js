// @flow
import { actionCreator, networkActionCreator } from '../../../utils/redux/actionCreators';


export const getLeagues
  = networkActionCreator("[LEAGUES] GET_LEAGUES");

export const setSelectedLeague
  = actionCreator("[LEAGUES] SET_SELECTED_LEAGUE");

export const getLeagueStandings
  = networkActionCreator("[LEAGUES] GET_LEAGUE_STANDINGS");

export const generateTeamObjects
  = actionCreator("[DATA] GENERATE_TEAM_OBJECTS");

export const setTeams
  = actionCreator("[DATA] SET_TEAMS");

export const setDisplayedTeams
  = actionCreator("[DATA] SET_DISPLAYED_TEAMS");

export const generateTable
  = actionCreator("[DATA] GENERATE_TABLE");

export const setTable
  = actionCreator("[DATA] SET_TABLE");

export const setDisplayedTable
  = actionCreator("[DATA] SET_DISPLAYED_TABLE");


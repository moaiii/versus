// @flow
import { actionCreator, networkActionCreator } from '../../../utils/redux/actionCreators';

export const getCountries
  = networkActionCreator("[COUNTRIES] GET_COUNTRIES");

export const setSelectedCountry
  = actionCreator("[COUNTRIES] SET_SELECTED_COUNTRY");

export const getSeasons
  = actionCreator("[DATES] GET_SEASONS");

export const setSeasons
  = actionCreator("[DATES] SET_SEASONS");

export const setDateSelection
  = actionCreator("[DATES] SET_DATE_SELECTION");

export const getGames
  = networkActionCreator("[GAMES] GET_GAMES");

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

export const generateTable
  = actionCreator("[DATA] GENERATE_TABLE");

export const setTable
  = actionCreator("[DATA] SET_TABLE");

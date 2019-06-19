import { actionCreator, networkActionCreator } from '../../../../utils/redux';


export const generateTable
  = actionCreator("[STANDINGS_TABLE] GENERATE_TABLE");

export const setDisplayedTable
  = actionCreator("[STANDINGS_TABLE] SET_DISPLAYED_TABLE");

export const removeTeams
  = actionCreator("[STANDINGS TABLE] REMOVE_TEAMS");

export const selectTeam
  = actionCreator("[STANDINGS TABLE] SELECT_TEAM");

import { actionCreator, networkActionCreator } from '../../../../utils/redux';


export const generateTable
  = actionCreator("[STANDINGS_TABLE] GENERATE_TABLE");

export const setTable
  = actionCreator("[STANDINGS_TABLE] SET_TABLE");

export const setDisplayedTable
  = actionCreator("[STANDINGS_TABLE] SET_DISPLAYED_TABLE");

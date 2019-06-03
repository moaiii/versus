import redux from "../lib/redux";

export const getSeasons
  = redux.actionCreator("[DATES] GET_SEASONS");

export const setSeasons
  = redux.actionCreator("[DATES] SET_SEASONS");

export const setDateSelection
  = redux.actionCreator("[DATES] SET_DATE_SELECTION");

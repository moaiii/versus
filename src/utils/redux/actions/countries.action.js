// @flow
import redux from "../lib/redux";

export const getCountries
  = redux.networkActionCreator("[COUNTRIES] GET_COUNTRIES");

export const setSelectedCountry
  = redux.actionCreator("[COUNTRIES] SET_SELECTED_COUNTRY");

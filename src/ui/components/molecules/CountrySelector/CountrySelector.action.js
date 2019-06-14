// @flow
import { actionCreator, networkActionCreator } from '../../../../utils/redux';

export const getCountries
  = networkActionCreator("[COUNTRIES] GET_COUNTRIES");

export const setSelectedCountry
  = actionCreator("[COUNTRIES] SET_SELECTED_COUNTRY");
// @flow
import { actionCreator, networkActionCreator } from '../../../../utils/redux';

export const getSeasons
= actionCreator("[DATES] GET_SEASONS");

export const setSeasons
= actionCreator("[DATES] SET_SEASONS");

export const setDateSelection
= actionCreator("[DATES] SET_DATE_SELECTION");
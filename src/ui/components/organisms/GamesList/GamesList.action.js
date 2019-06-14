// @flow
import {actionCreator, networkActionCreator} from '../../../../utils/redux';


export const getGames
  = networkActionCreator("[GAMES] GET_GAMES");

export const setGames
  = actionCreator("[GAMES] SET_GAMES");

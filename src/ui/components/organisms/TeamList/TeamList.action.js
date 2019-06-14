// @flow
import {actionCreator, networkActionCreator} from '../../../../utils/redux';

export const generateTeamObjects
  = actionCreator("[DATA] GENERATE_TEAM_OBJECTS");

export const setTeams
  = actionCreator("[DATA] SET_TEAMS");

export const setDisplayedTeams
  = actionCreator("[DATA] SET_DISPLAYED_TEAMS");
// @flow
import {actionCreator, networkActionCreator} from '../../../../utils/redux';

export const generateTeamObjects
  = actionCreator("[TEAM_LIST] GENERATE_TEAM_OBJECTS");

export const setTeams
  = actionCreator("[TEAM_LIST] SET_TEAMS");

export const setDisplayedTeams
  = actionCreator("[TEAM_LIST] SET_DISPLAYED_TEAMS");
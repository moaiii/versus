// @flow
import {actionCreator, networkActionCreator} from '../../../../utils/redux';

export const generateTeamObjects
  = actionCreator("[TEAMS_LIST] GENERATE_TEAM_OBJECTS");

export const setTeams
  = actionCreator("[TEAMS_LIST] SET_TEAMS");

export const setDisplayedTeams
  = actionCreator("[TEAMS_LIST] SET_DISPLAYED_TEAMS");
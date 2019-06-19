// @flow
import {actionCreator, networkActionCreator} from '../../../../utils/redux';

export const generateTeamObjects
  = actionCreator("[TEAM_LIST] GENERATE_TEAM_OBJECTS");

export const setRawTeams
  = actionCreator("[TEAM_LIST] SET_RAW_TEAMS");

export const setDisplayedTeams
  = actionCreator("[TEAM_LIST] SET_DISPLAYED_TEAMS");

export const setDeletedTeams
  = actionCreator("[TEAM_LIST] SET_DELETED_TEAMS");

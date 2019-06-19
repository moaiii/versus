const dataInitialState = {
  teams: {
    displayed: [],
    raw: [],
    deleted: []
  },
};


export default (state = dataInitialState, action) => {
  switch (action.type) {
    case "[TEAM_LIST] SET_RAW_TEAMS": {
      return {
        ...state,
        teams: {
          ...state.teams,
          raw: action.payload
        }
      };
    }

    case "[TEAM_LIST] SET_DISPLAYED_TEAMS": {
      return {
        ...state,
        teams: {
          ...state.teams,
          displayed: action.payload
        }
      };
    }

    case "[TEAM_LIST] SET_DELETED_TEAMS": {
      return {
        ...state,
        teams: {
          ...state.teams,
          deleted: action.payload
        }
      };
    }

    default: {
      return state;
    }
  }
};

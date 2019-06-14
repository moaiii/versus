const dataInitialState = {
  teams: {
    displayed: [],
    raw: []
  },
};

export default (state = dataInitialState, action) => {
  switch (action.type) {
    case "[DATA] SET_TEAMS": {
      return {
        ...state,
        teams: {
          ...state.teams,
          raw: action.payload
        }
      };
    }

    case "[DATA] SET_DISPLAYED_TEAMS": {
      return {
        ...state,
        teams: {
          ...state.teams,
          displayed: action.payload
        }
      };
    }

    default: {
      return state;
    }
  }
};
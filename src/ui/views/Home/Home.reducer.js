const leaguesInitialState = {
  value: [],
  selected: null,
  standings: null,
  pending: false,
  complete: false,
  error: false
};


export default (state = leaguesInitialState, action) => {
  switch (action.type) {
    case "[LEAGUES] SET_SELECTED_LEAGUE": {
      return {
        ...state,
        selected: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

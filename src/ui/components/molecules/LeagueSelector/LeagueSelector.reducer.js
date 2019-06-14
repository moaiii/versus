let initialState = {
  leagues: []
};


export default (state = initialState, action) => {
  switch (action.type) {
    case "[LEAGUES] SET_SELECTED_LEAGUE": {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

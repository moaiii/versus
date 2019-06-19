const gamesInitialState = {
  games: [],
  gamesFiltered: []
};


export default (state = gamesInitialState, action) => {
  switch (action.type) {
    case "[GAMES] GET_GAMES__SUBMIT": {
      return state;
    }

    case "[GAMES] GET_GAMES__RESOLVED": {
      return {
        ...state,
        games: action.payload,
      };
    }

    case "[GAMES] SET_FILTERED_GAMES": {
      return {
        ...state,
        gamesFiltered: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

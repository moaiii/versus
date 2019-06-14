const gamesInitialState = {
  games: [],
};

export default (state = gamesInitialState, action) => {
  switch (action.type) {
    case "[GAMES] GET_GAMES__SUBMIT": {
      return state;
    }

    case "[GAMES] GET_GAMES__RESOLVED": {
      return {
        ...state,
        games: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

const initialState = {
  games: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "[GAMES] GET_GAMES__SUBMIT": {
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

let initialState = {};


export default (state = initialState, action) => {
  switch (action.type) {
    case "[LeagueSelector] AN_EXAMPLE_ACTION_TYPE": {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

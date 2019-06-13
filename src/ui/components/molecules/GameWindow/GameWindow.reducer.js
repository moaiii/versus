// @flow

let initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "[GAME_WINDOW] SET_TIME": {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

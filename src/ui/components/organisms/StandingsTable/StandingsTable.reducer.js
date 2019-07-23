const standingsInitialState = {
  removed: [],
  selected: []
};

export const standingsReducer = (state = standingsInitialState, action) => {
  switch (action.type) {

    case "[STANDINGS TABLE] SELECT_TEAM": {

      return {
        ...state,
        selected: action.payload
      };
    }

    case "[STANDINGS TABLE] REMOVE_TEAMS": {

      return {
        ...state,
        removed: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export default {
  standingsReducer
}

const standingsInitialState = {
  selected: [],
};

export const standingsReducer = (state = standingsInitialState, action) => {
  switch (action.type) {
    case "[STANDINGS TABLE] SELECT_TEAM": {
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

export default {
  standingsReducer
}
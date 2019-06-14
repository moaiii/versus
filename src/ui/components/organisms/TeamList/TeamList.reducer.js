let initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "[TeamList] AN_EXAMPLE_ACTION_TYPE": {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

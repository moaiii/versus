let initialState = {
  gameTimeWindow: {
    from: 0,
    to: 90,
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "[FILTERS] SET": {
      const { key, value } = action.payload;
      return {
        ...state,
        [`${key}`]: value
      };
    }

    case "[FILTERS] RESET": {
      return {
        ...initialState
      };
    }

    default: {
      return state;
    }
  }
};

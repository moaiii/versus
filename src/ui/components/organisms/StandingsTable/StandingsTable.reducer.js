const dataInitialState = {
  table: {
    displayed: [],
    raw: []
  },
};

export default (state = dataInitialState, action) => {
  switch (action.type) {
    case "[STANDINGS_TABLE] SET_TABLE": {
      return {
        ...state,
        table: {
          ...state.table,
          raw: action.payload
        }
      };
    }

    case "[STANDINGS_TABLE] SET_DISPLAYED_TABLE": {
      return {
        ...state,
        table: {
          ...state.table,
          displayed: action.payload
        }
      };
    }

    default: {
      return state;
    }
  }
};
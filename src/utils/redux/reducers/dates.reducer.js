const initialState = {
  seasons: [],
  selected: {
    "date_from": "",
    "date_to": "",
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "[DATES] SET_SEASONS": {
      return {
        ...state, 
        seasons: action.payload
      };
    }
    case "[DATES] SET_DATE_SELECTION": {
      return { 
        ...state, 
        selected: Object.assign({}, state.selected, {
          "date_from": action.payload.date_from,
          "date_to": action.payload.date_to,
        })
      };
    }

    default: {
      return state;
    }
  }
};

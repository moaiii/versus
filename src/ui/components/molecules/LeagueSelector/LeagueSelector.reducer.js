const initialState = {
  value: [],
  selected: null,
  pending: false,
  complete: false,
  error: false
};


export default (state = initialState, action) => {
  switch (action.type) {
    case "[LEAGUES] SET_SELECTED_LEAGUE": {
      return {
        ...state,
        selected: action.payload
      };
    }
    case "[LEAGUES] GET_LEAGUES__SUBMIT": {
      return {
        ...state,
        pending: true,
        complete: false,
        error: false
      };
    }
    case "[LEAGUES] GET_LEAGUES__RESOLVED": {
      return {
        ...state,
        value: action.payload,
        pending: false,
        complete: true,
        error: false
      };
    }
    case "[LEAGUES] GET_LEAGUES__REJECTED": {
      return {
        ...state,
        pending: false,
        complete: false,
        error: true
      };
    }
    default: {
      return state;
    }
  }
};
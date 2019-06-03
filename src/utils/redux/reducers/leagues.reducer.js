const initialState = {
  value: [],
  selected: null,
  standings: null,
  pending: false,
  complete: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "[LEAGUES] SET_SELECTED_LEAGUE": {
      return {
        ...state,
        selected: state.value
          .filter( league => league.league_name === action.payload)[0]
      };
    }
    case "[LEAGUES] GET_LEAGUE_STANDINGS__SUBMIT": {
      return {
        ...state,
        pending: true,
        complete: false,
        error: false
      };
    }
    case "[LEAGUES] GET_LEAGUE_STANDINGS__RESOLVED": {
      return { 
        ...state, 
        standings: action.payload,
        pending: false,
        complete: true,
        error: false
      };
    }
    case "[LEAGUES] GET_LEAGUE_STANDINGS__REJECTED": {
      return { 
        ...state, 
        pending: false,
        complete: false,
        error: true
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

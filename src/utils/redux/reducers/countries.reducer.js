const initialState = {
  value: [],
  selected: null,
  pending: false,
  complete: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "[COUNTRIES] SET_SELECTED_COUNTRY": {
      return {
        ...state, 
        selected: state.value
          .filter( country => country.country_name === action.payload)[0]
      };
    }
    case "[COUNTRIES] GET_COUNTRIES__SUBMIT": {
      return { 
        ...state, 
        pending: true,
        complete: false,
        error: false
      };
    }
    case "[COUNTRIES] GET_COUNTRIES__RESOLVED": {
      return { 
        ...state, 
        value: action.payload,
        pending: false,
        complete: true,
        error: false
      };
    }
    case "[COUNTRIES] GET_COUNTRIES__REJECTED": {
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

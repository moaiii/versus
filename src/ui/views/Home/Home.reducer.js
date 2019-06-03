const leaguesInitialState = {
  value: [],
  selected: null,
  standings: null,
  pending: false,
  complete: false,
  error: false
};

export const leaguesReducer = (state = leaguesInitialState, action) => {
  switch (action.type) {
    case "[LEAGUES] SET_SELECTED_LEAGUE": {
      return {
        ...state,
        selected: action.payload
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


const gamesInitialState = {
  games: [],
};

export const gamesReducer = (state = gamesInitialState, action) => {
  switch (action.type) {
    case "[GAMES] GET_GAMES__SUBMIT": {
      return state;
    }

    case "[GAMES] GET_GAMES__RESOLVED": {
      return {
        ...state,
        games: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

const datesInitialState = {
  seasons: [],
  selected: {
    "date_from": "",
    "date_to": "",
  }
};

export const datesReducer = (state = datesInitialState, action) => {
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

const countriesInitialState = {
  value: [],
  selected: null,
  pending: false,
  complete: false,
  error: false
};

export const countriesReducer = (state = countriesInitialState, action) => {
  switch (action.type) {
    case "[COUNTRIES] SET_SELECTED_COUNTRY": {
      return {
        ...state,
        selected: action.payload
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

export default {
  leaguesReducer,
  gamesReducer,
  datesReducer,
  countriesReducer,
}
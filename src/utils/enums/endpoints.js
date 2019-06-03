export default {

  GET_COUNTRIES: {
    action: 'get_countries',
    header: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  },
  GET_GAMES: {
    action: 'get_events',
    header: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    params: [
      'from',
      'to',
      'league_id'
    ],
  },
  GET_LEAGUES: {
    action: 'get_leagues',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    params: ['country_id']
  },
  GET_LEAGUE_STANDINGS: {
    action: 'get_standings',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    params: ['league_id']
  }
};

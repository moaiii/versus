// @flow
import {connect} from  'react-redux';
import {store} from '../../../../utils/redux';
import LeagueSelector from  './LeagueSelector.jsx';
import {
  getLeagues,
  setSelectedLeague,
  getLeagueStandings
} from  './LeagueSelector.action';

function mapStoreToProps( store ) {
  return {
    leagues: store.leaguesReducer.value,
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    setSelectedLeague: league => dispatch(setSelectedLeague(league)),
  }
}


export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(LeagueSelector);

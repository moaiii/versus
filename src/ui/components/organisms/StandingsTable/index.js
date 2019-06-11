// @flow

import StandingsTable from "./StandingsTable.jsx";
import store from '../../../../utils/redux';
import { connect } from "react-redux";
import * as actions from './StandingsTable.actions';

function mapStoreToProps(store) {


  return {
    // countries: store.countriesReducer.value,
    // leagues: store.leaguesReducer.value,
    // seasons: store.datesReducer.seasons,
    // games: store.gamesReducer.games,
    table: store.dataReducer.table,
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(StandingsTable);

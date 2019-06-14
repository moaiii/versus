// @flow

import StandingsTable from "./StandingsTable.jsx";
import store from '../../../../utils/redux';
import { connect } from "react-redux";
import * as actions from './StandingsTable.actions';
import StandingsTableMiddleware from './StandingsTable.middleware';
import StandingsTableReducer from './StandingsTable.reducer';


function mapStoreToProps(store) {
  return {
    table: store.StandingsTableReducer.table,
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}


export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(StandingsTable);

export {
  StandingsTableMiddleware,
  StandingsTableReducer
}

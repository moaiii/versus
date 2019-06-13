// @flow

import StandingsTable from "./StandingsTable.jsx";
import store from '../../../../utils/redux';
import { connect } from "react-redux";
import * as actions from './StandingsTable.actions';

function mapStoreToProps(store) {
  return {
    table: store.dataReducer.table,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleDeleteTeams: () => dispatch(actions.removeTeams()),
    handleSelectTeam: (teams) => dispatch(actions.selectTeam(teams)),
  }
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(StandingsTable);

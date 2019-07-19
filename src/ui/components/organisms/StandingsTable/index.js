// @flow

import StandingsTable from "./StandingsTable.jsx";
import { connect } from "react-redux";
import * as actions from './StandingsTable.actions';

function mapStoreToProps(store) {
  return {
    removed: store.standingsReducer.removed,
    selected: store.standingsReducer.selected,
    table: store.dataReducer.table
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleDeleteTeams: teams => dispatch(actions.removeTeams(teams)),
    handleSelectTeam: teams => dispatch(actions.selectTeam(teams))
  }
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(StandingsTable);

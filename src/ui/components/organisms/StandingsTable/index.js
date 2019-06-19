import StandingsTable from "./StandingsTable.jsx";
import {store} from '../../../../utils/redux';
import { connect } from "react-redux";
import {
  generateTable,
  setDisplayedTable,
  removeTeams,
  selectTeam
} from './StandingsTable.actions';
import StandingsTableMiddleware from './StandingsTable.middleware';
import StandingsTableReducer from './StandingsTable.reducer';


function mapStoreToProps(store) {
  return {
    table: store.StandingsTableReducer.table.displayed,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    generateTable: () => store.dispatch(generateTable()),
    setDisplayedTable: () => store.dispatch(setDisplayedTable()),
    removeTeams: (selectedForDeletion) => store.dispatch(removeTeams({
      selectedForDeletion,
      middlewareMode: 'last'
    })),
    selectTeam: () => store.dispatch(selectTeam()),
  }
}


export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(StandingsTable);

export {
  StandingsTableMiddleware,
  StandingsTableReducer
}

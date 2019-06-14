// @flow
import {connect} from "react-redux";
import {store} from "../../../../utils/redux";
import TeamList from "./TeamList.jsx";
import TeamListMiddleware from './TeamList.middleware';
import TeamListReducer from './TeamList.reducer';
import {
  generateTeamObjects,
  setTeams,
  setDisplayedTeams
} from "./TeamList.action";

function mapStoreToProps( store ) {
  return {

  }
}

function mapDispatchToProps( dispatch ) {
  return {

  }
}


export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(TeamList);

export {
  TeamListMiddleware,
  TeamListReducer
}
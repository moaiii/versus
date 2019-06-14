// @flow
import {connect} from "react-redux";
import store from "../../../db/store";
import TeamList from "./TeamList.jsx";
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

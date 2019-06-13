// @flow
import {connect} from "react-redux";
import store from "../../../db/store";
import Filters from "./Filters.jsx";
import * as action from "./Filters.action";

function mapStoreToProps(store) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: (config) => dispatch(action.setFilter(config)),
    resetFilter: () => dispatch(action.resetFilter()),
  }
}


export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Filters);

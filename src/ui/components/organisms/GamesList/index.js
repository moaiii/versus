// @flow
import {connect} from "react-redux";
import store from "../../../db/store";
import GamesList from "./GamesList.jsx";
import * as action from "./GamesList.action";

function mapStoreToProps( store ) {
  return {

  }
}
 
function mapDispatchToProps( dispatch ) {
  return {

  }
}


export default connect( mapStoreToProps, mapDispatchToProps )( GamesList );

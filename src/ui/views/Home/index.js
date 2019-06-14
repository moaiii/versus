// @flow

import Home from "./Home.jsx";
import store from '../../../utils/redux/store';
import { connect } from "react-redux";
import * as actions from './Home.actions';

function mapStoreToProps(store) {
  return { }
}

function mapDispatchToProps (dispatch) {
  return { }
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Home);

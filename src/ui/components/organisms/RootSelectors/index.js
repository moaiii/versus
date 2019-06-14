// @flow
import {connect} from 'react-redux';
import {store} from '../../../../utils/redux';
import RootSelectors from './RootSelectors.jsx';
import * as action from './RootSelectors.action';
import RootSelectorsMiddleware from './RootSelectors.middleware';
import RootSelectorsReducer from './RootSelectors.reducer';


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
)(RootSelectors);

export {
  RootSelectorsMiddleware,
  RootSelectorsReducer
}
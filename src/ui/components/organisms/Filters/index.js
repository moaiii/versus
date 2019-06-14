// @flow
import {connect} from 'react-redux';
import { store } from '../../../../utils/redux';
import Filters from './Filters.jsx';
import * as action from './Filters.action';
import FiltersReducer from './Filters.reducer';
import FiltersMiddleware from './Filters.middleware';


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

export {
  FiltersReducer,
  FiltersMiddleware
}

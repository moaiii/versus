// @flow
import {connect} from 'react-redux';
import { store } from '../../../../utils/redux';
import Filters from './Filters.jsx';
import FiltersReducer from './Filters.reducer';
import FiltersMiddleware from './Filters.middleware';
import {
  setFilter,
  resetFilter
} from './Filters.action';


function mapStoreToProps(store) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: (config) => dispatch(setFilter(config)),
    resetFilter: () => dispatch(resetFilter()),
  }
}


export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Filters);

export {
  FiltersMiddleware,
  FiltersReducer,
}

import {connect} from 'react-redux';
import {store} from '../../../../utils/redux';
import DateSelector from './DateSelector.jsx';
import DateSelectorMiddleware from './DateSelector.middleware';
import DateSelectorReducer from './DateSelector.reducer';
import {
  setDateSelection,
  setSeasons,
  getSeasons
} from './DateSelector.action';


function mapStoreToProps( store ) {
  return {
    seasons: store.datesReducer.seasons,
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    setDateSelection: dates => dispatch(setDateSelection({
      dates,
      middlewareMode: 'last'
    })
  ),
  }
}


export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(DateSelector);

export {
  DateSelectorMiddleware,
  DateSelectorReducer
};

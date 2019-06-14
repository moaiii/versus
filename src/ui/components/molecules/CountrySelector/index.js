import {connect} from 'react-redux';
import {store} from '../../../../utils/redux';
import CountrySelector from './CountrySelector.jsx';
import CountrySelectorMiddleware from './CountrySelector.middleware';
import CountrySelectorReducer from './CountrySelector.reducer';
import {
  getCountries,
  setSelectedCountry
} from './CountrySelector.action';


function mapStoreToProps( store ) {
  return {
    countries: store.CountrySelectorReducer.value,
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    getCountries: () => dispatch(getCountries.submit()),
    setSelectedCountry: country => dispatch(setSelectedCountry(country)),
  }
}


export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(CountrySelector);

export {
  CountrySelectorMiddleware,
  CountrySelectorReducer
};

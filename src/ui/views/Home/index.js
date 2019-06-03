// @flow

import Home from "./Home.jsx";
import store from '../../../db/store';
import { connect } from "react-redux";
import {
  getCountries,
  setSelectedCountry,
  setSelectedLeague,
  setDateSelection,
} from './Home.actions';

function mapStoreToProps(store) {
  return {
    countries: store.countriesReducer.value,
    leagues: store.leaguesReducer.value,
    seasons: store.datesReducer.seasons
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCountries: () => { dispatch(getCountries.submit()) },

    setSelectedCountry: (country) => { dispatch(setSelectedCountry(country)) },

    setSelectedLeague: (league) => { dispatch(setSelectedLeague(league)) },

    setDateSelection: (dates) => {
      dispatch(setDateSelection({
        dates,
        middlewareMode: "last"
      }));
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Home);

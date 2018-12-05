import Home from "./Home.jsx";
import common from 'versus-common-link';
// @flow
import { connect } from "react-redux";

function mapStoreToProps(store) {
  return {
    countries: store.countriesReducer.value,
    leagues: store.leaguesReducer.value,
    seasons: store.datesReducer.seasons
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCountries: () => { dispatch(common.actions.getCountries.submit()) },

    setSelectedCountry: (country) => { dispatch(common.actions.setSelectedCountry(country)) },

    setSelectedLeague: (league) => { dispatch(common.actions.setSelectedLeague(league)) },

    setDateSelection: (dates) => {
      dispatch(common.actions.setDateSelection({
        dates,
        middlewareMode: "last"
      }));
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Home);